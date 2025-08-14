import { Pressable, View, Dimensions } from 'react-native';
import type { Hero } from '@/types';
import { Colors } from '@/constants/colors';
import { HeroImage } from './HeroImage';
import { HeroInfo } from './HeroInfo';

interface Props {
  hero: Hero;
  onPress: () => void;
}

export const HeroCard = ({ hero, onPress }: Props) => {
  const { width } = Dimensions.get('window');
  const isSmallScreen = width < 360;

  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center ${isSmallScreen ? 'my-1.5' : 'my-2.5'} p-2 bg-[${Colors.secondary}] rounded-lg`}
    >
      <HeroImage hero={hero} variant="card" />
      
      <View className="flex-1 justify-center ml-3">
        <HeroInfo hero={hero} variant="card" />
      </View>
    </Pressable>
  );
};
