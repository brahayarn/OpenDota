import { useState, useMemo } from 'react';
import type { Hero } from '@/types';

export function useHeroFilter(heroes: Hero[]) {
  const [attributeFilter, setAttributeFilter] = useState<'str' | 'agi' | 'int' | ''>('');
  const [roleFilter, setRoleFilter] = useState<string>('');

  const filteredHeroes = useMemo(() => {
    return heroes.filter(hero => {
      const attrMatch = attributeFilter ? hero.primary_attr === attributeFilter : true;
      const roleMatch = roleFilter ? hero.roles.includes(roleFilter) : true;
      return attrMatch && roleMatch;
    });
  }, [heroes, attributeFilter, roleFilter]);

  return { filteredHeroes, setAttributeFilter, setRoleFilter };
}
