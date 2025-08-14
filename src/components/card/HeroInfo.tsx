import { View, Text, Dimensions } from 'react-native';
import type { Hero, HeroDetails } from '@/types';
import { Colors } from '@/constants/colors';
import { HeroInfoDetail } from './HeroInfoDetail';
import { HeroInfoCard } from './HeroInfoCard';

interface Props {
  hero: Hero;
  variant?: 'card' | 'detail';
}

export const HeroInfo = ({ hero, variant = 'card' }: Props) => {
  const { width } = Dimensions.get('window');
  const isSmallScreen = width < 360;
  const isLargeScreen = width > 768;

  const nameSize = isLargeScreen ? 'text-xl' : isSmallScreen ? 'text-sm' : 'text-base';
  const textSize = isLargeScreen ? 'text-lg' : isSmallScreen ? 'text-xs' : 'text-sm';

  return (
    <View className="flex-shrink">
      {variant === 'card' && (
        <HeroInfoCard hero={hero} textSize={textSize} />
      )}

      {variant === 'detail' && (
        <HeroInfoDetail hero={hero as HeroDetails} />
      )}
    </View>
  );
};
