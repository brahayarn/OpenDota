import { View, Text } from 'react-native';
import type { Hero } from '@/types';
import { Colors } from '@/constants/colors';

interface Props {
  hero: Hero;
  textSize: string; 
}

export const HeroInfoCard = ({ hero, textSize }: Props) => {
  return (
    <View className="rounded-xl p-3 space-y-1">
      <Text className={`${textSize} font-semibold`} style={{ color: Colors.textPrimary }}>
        Primary: {hero.primary_attr.toUpperCase()}
      </Text>
      <Text className={`${textSize}`} style={{ color: Colors.grayText }}>
        Roles: {hero.roles.join(', ')}
      </Text>
    </View>
  );
};
