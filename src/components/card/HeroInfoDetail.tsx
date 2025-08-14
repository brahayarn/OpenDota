import { View, Text } from 'react-native';
import type { HeroDetails } from '@/types';
import { Colors } from '@/constants/colors';
import { Container } from '../ui/Container';

interface Props {
  hero: HeroDetails;
}

export const HeroInfoDetail = ({ hero }: Props) => {
  return (
    <Container bg="bg-blue-200">
    <View className="space-y-4 px-2">

      <Text className="text-3xl font-extrabold mb-2" style={{ color: Colors.textPrimary }}>
        {hero.localized_name}
      </Text>

      <View className="bg-gray-50 rounded-xl p-4 space-y-1 shadow-md">
        <Text className="text-base" style={{ color: Colors.grayText }}>
          Primary Attribute: {hero.primary_attr.toUpperCase()}
        </Text>
        <Text className="text-base" style={{ color: Colors.grayText }}>
          Attack Type: {hero.attack_type}
        </Text>
        <Text className="text-base" style={{ color: Colors.grayText }}>
          Roles: {hero.roles.join(', ')}
        </Text>
        <Text className="text-base" style={{ color: Colors.grayText }}>
          Legs: {hero.legs}
        </Text>
      </View>

      <View className="bg-white rounded-xl p-4 shadow-md space-y-1 border border-gray-200">
        <Text className="font-bold text-lg" style={{ color: Colors.textPrimary }}>
          Base Stats
        </Text>
        <Text>STR: {hero.base_str} (+{hero.str_gain}/lvl)</Text>
        <Text>AGI: {hero.base_agi} (+{hero.agi_gain}/lvl)</Text>
        <Text>INT: {hero.base_int} (+{hero.int_gain}/lvl)</Text>
      </View>

      <View className="bg-white rounded-xl p-4 shadow-md space-y-1 border border-gray-200">
        <Text className="font-bold text-lg" style={{ color: Colors.textPrimary }}>
          Combat
        </Text>
        <Text>Attack: {hero.base_attack_min} - {hero.base_attack_max}</Text>
        <Text>Attack Rate: {hero.attack_rate}</Text>
        <Text>Attack Range: {hero.attack_range}</Text>
        <Text>Armor: {hero.armor}</Text>
      </View>

      <View className="bg-white rounded-xl p-4 shadow-md space-y-1 border border-gray-200">
        <Text className="font-bold text-lg" style={{ color: Colors.textPrimary }}>
          Vision & Movement
        </Text>
        <Text>Move Speed: {hero.move_speed}</Text>
        <Text>Day Vision: {hero.day_vision}</Text>
        <Text>Night Vision: {hero.night_vision}</Text>
      </View>

      {hero.abilities && (
        <View className="bg-white rounded-xl p-4 shadow-md space-y-1 border border-gray-200">
          <Text className="font-bold text-lg" style={{ color: Colors.textPrimary }}>
            Abilities
          </Text>
          {Object.keys(hero.abilities).map((ability) => (
            <Text key={ability} className="ml-2 text-gray-700">
               {ability}
            </Text>
          ))}
        </View>
      )}
    </View>
    </Container>
  );
};
