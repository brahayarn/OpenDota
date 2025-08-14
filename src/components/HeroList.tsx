import { ScrollView, ActivityIndicator, Text, Dimensions, View } from 'react-native';
import type { Hero } from '@/types';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '@/types/navigation';
import { HeroCard } from '@card/HeroCard';
import { Colors } from '@/constants/colors';

interface Props {
  heroes: Hero[];
  loading: boolean;
  error: string | null;
}

const { width } = Dimensions.get('window');
const isSmallScreen = width < 360;
const isLargeScreen = width > 768;

export const HeroList = ({ heroes, loading, error }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScrollView
      className={`px-${isSmallScreen ? 2 : isLargeScreen ? 6 : 4} py-${isSmallScreen ? 3 : 5} bg-blue-200`}
      contentContainerStyle={{ paddingBottom: 16 }}
      showsVerticalScrollIndicator={false}>
      {loading && <ActivityIndicator size="large" className="mt-4" color={Colors.primary} />}
      {error && (
        <Text
          className={`mt-4 text-center ${isLargeScreen ? 'text-lg' : 'text-sm'}`}
          style={{ color: Colors.error }}>
          {error}
        </Text>
      )}

      {!loading && heroes.length === 0 && !error && (
        <View className="mt-4">
          <Text
            className={`text-center ${isLargeScreen ? 'text-lg' : 'text-sm'}`}
            style={{ color: Colors.textPrimary }}>
            No heroes found.
          </Text>
        </View>
      )}

      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          hero={hero}
          onPress={() => navigation.navigate('HeroDetail', { hero })}
        />
      ))}
    </ScrollView>
  );
};
