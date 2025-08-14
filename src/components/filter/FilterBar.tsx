import { ScrollView, View } from 'react-native';
import { FilterButton } from './FilterButton';

type Props = {
  attr: 'str' | 'agi' | 'int' | '';
  setAttr: (v: 'str' | 'agi' | 'int' | '') => void;
  role: string;
  setRole: (v: string) => void;
};

const ATTRS: Props['attr'][] = ['', 'str', 'agi', 'int'];
const ROLES: string[] = ['', 'Carry', 'Support', 'Nuker', 'Disabler', 'Jungler', 'Durable', 'Escape', 'Pusher', 'Initiator'];

export default function FilterBar({ attr, setAttr, role, setRole }: Props) {
  return (
    <View className="mb-4">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-2">
        {ATTRS.map(a => (
          <FilterButton
            key={a || 'all'}
            title={a === '' ? 'ALL' : a.toUpperCase()}
            active={attr === a}
            onPress={() => setAttr(a)}
          />
        ))}
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {ROLES.map(r => (
          <FilterButton
            key={r || 'any'}
            title={r === '' ? 'ANY' : r}
            active={role === r}
            onPress={() => setRole(r)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
