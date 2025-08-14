import { useState, useMemo } from 'react';
import { Hero } from '@/types';

export function useHeroSort(heroes: Hero[]) {
  const [sortKey, setSortKey] = useState<'name' | 'move_speed' | ''>('');

  const sortedHeroes = useMemo(() => {
    if (!sortKey) return heroes;
    return [...heroes].sort((a, b) => {
      if (sortKey === 'name') return a.localized_name.localeCompare(b.localized_name);
      if (sortKey === 'move_speed') return (b.move_speed || 0) - (a.move_speed || 0);
      return 0;
    });
  }, [heroes, sortKey]);

  return { sortedHeroes, setSortKey, sortKey }; 
}
