import { useEffect, useState } from 'react';
import { api } from '@api/opendota';
import { Hero } from '@/types';


export function useHeroes() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const res = await api.get<Hero[]>('/heroStats');
        setHeroes(res.data);
      } catch (err) {
        setError('Не вдалося завантажити героїв');
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  return { heroes, loading, error };
}
