import { ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/types/navigation';
import { HeroImage } from '@/components/card/HeroImage';
import { HeroInfo } from '@/components/card/HeroInfo';


type Props = NativeStackScreenProps<RootStackParamList, 'HeroDetail'>;

export const HeroDetailScreen = ({ route }: Props) => {
  const { hero } = route.params;

  return (
    <ScrollView className="px-4 py-6 bg-blue-200">
      <HeroImage hero={hero} variant="detail"/>
      <HeroInfo hero={hero} variant="detail"/>
    </ScrollView>
  );
};
