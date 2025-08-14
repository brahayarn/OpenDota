import { Image, Dimensions } from 'react-native';
import type { Hero } from '@/types';

interface Props {
  hero: Hero;
  variant?: 'detail' | 'card';
}

export const HeroImage = ({ hero, variant = 'card' }: Props) => {
  const { width } = Dimensions.get('window');
  const isSmallScreen = width < 360;
  const isLargeScreen = width > 768;

  let size = 64; 
  if (variant === 'detail') size = isLargeScreen ? 120 : isSmallScreen ? 80 : 100;
  if (variant === 'card') size = isLargeScreen ? 100 : isSmallScreen ? 60 : 80;

  return (
    <Image
      source={{ uri: `https://steamcdn-a.akamaihd.net${hero.img}` }}
      style={{ width: size, height: size, borderRadius: 8, marginRight: 12 }}
      resizeMode="cover"
    />
  );
};
