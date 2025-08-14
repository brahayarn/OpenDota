import { View, ScrollView } from 'react-native';
import { HeroList } from '@/components/HeroList';
import FilterBar from '@/components/filter/FilterBar';
import { SortButton } from '@/components/sort/SortButton';
import { Container } from '../components/ui/Container';
import { useHeroesData } from '@/hooks/useHeroesData';

export const EditScreenInfo = () => {
  const {
    heroes,
    loading,
    error,
    attr,
    role,
    handleAttrChange,
    handleRoleChange,
    sortKey,
    setSortKey,
  } = useHeroesData();

  return (
    <Container className="flex-1">
      <View className="relative bg-blue-200 px-4 py-2">
        <FilterBar attr={attr} setAttr={handleAttrChange} role={role} setRole={handleRoleChange} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center' }}
          className="mt-2">
          <SortButton title="Name" active={sortKey === 'name'} onPress={() => setSortKey('name')} />
          <SortButton
            title="Move Speed"
            active={sortKey === 'move_speed'}
            onPress={() => setSortKey('move_speed')}
          />
        </ScrollView>

        <View className="absolute bottom-0 left-0 right-0 h-1 rounded-t-full bg-blue-300" />
      </View>

      <View className="flex-1">
        <HeroList heroes={heroes} loading={loading} error={error} />
      </View>
    </Container>
  );
};
