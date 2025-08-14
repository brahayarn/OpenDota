import { Pressable, Text } from 'react-native';
import { Colors  } from '@/constants/colors';

type Props = {
  title: string;
  active: boolean;
  onPress: () => void;
};

export const FilterButton = ({ title, active, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className={`mr-1 rounded-2xl border-2 px-2 py-1.5 
        ${active ? Colors.primary : Colors.secondary} 
        ${active ? Colors.primaryDark : Colors.border}`}
    >
      <Text className={`font-bold ${active ? Colors.textSecondary : Colors.textPrimary}`}>
        {title}
      </Text>
    </Pressable>
  );
};
