import { useState, useEffect } from 'react';
import { api } from '@api/opendota';
import { Hero } from '@/types';
import { useHeroFilter } from './useHeroFilter';
import { useHeroSort } from './useHeroSort';

export function useHeroesData() {
  const [allHeroes, setAllHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [attr, setAttr] = useState<'' | 'str' | 'agi' | 'int'>('');
  const [role, setRole] = useState<string>('');

  const { filteredHeroes, setAttributeFilter, setRoleFilter } = useHeroFilter(allHeroes);
  const { sortedHeroes, setSortKey, sortKey } = useHeroSort(filteredHeroes);

  const handleAttrChange = (a: '' | 'str' | 'agi' | 'int') => {
    setAttr(a);
    setAttributeFilter(a);
  };
  const handleRoleChange = (r: string) => {
    setRole(r);
    setRoleFilter(r);
  };

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const res = await api.get('/heroStats');
        setAllHeroes(res.data);
      } catch (err) {
        setError('Не вдалося завантажити героїв');
      } finally {
        setLoading(false);
      }
    };
    fetchHeroes();
  }, []);

  return {
    heroes: sortedHeroes,
    loading,
    error,
    attr,
    role,
    handleAttrChange,
    handleRoleChange,
    sortKey,      
    setSortKey,
  };
}
