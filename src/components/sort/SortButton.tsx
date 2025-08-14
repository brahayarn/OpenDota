import { Pressable, Text, Dimensions } from 'react-native';
import { Colors } from '@/constants/colors';

const { width } = Dimensions.get('window');
const isSmallScreen = width < 360;
const isLargeScreen = width > 768;

type Props = {
  title: string;
  active: boolean;
  onPress: () => void;
};

export const SortButton = ({ title, active, onPress }: Props) => {
  const paddingX = isSmallScreen ? 'px-3' : isLargeScreen ? 'px-6' : 'px-4';
  const paddingY = isSmallScreen ? 'py-1.5' : isLargeScreen ? 'py-3' : 'py-2';
  const textSize = isLargeScreen ? 'text-lg' : 'text-base';

  const bgClass = active ? Colors.primary : Colors.secondary;
  const borderClass = active ? Colors.primaryDark : Colors.border;
  const textClass = active ? Colors.textSecondary : Colors.textPrimary;

  return (
    <Pressable
      onPress={onPress}
      className={`mr-1 rounded-2xl border ${bgClass} ${borderClass} ${paddingX} ${paddingY} items-center justify-center`}
    >
      <Text className={`font-bold ${textClass} ${textSize}`}>{title}</Text>
    </Pressable>
  );
};
