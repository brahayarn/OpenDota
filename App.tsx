import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditScreenInfo } from '@/screens/EditScreenInfo';
import { HeroDetailScreen } from '@/screens/HeroDetailScreen';
import { RootStackParamList } from '@/types/navigation';
import './global.css';
import { Colors } from '@/constants/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary, 
          },
          headerTintColor: Colors.textSecondary, 
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          contentStyle: {
            backgroundColor: '#ffe4e6', 
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={EditScreenInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HeroDetail"
          component={HeroDetailScreen}
          options={{
            title: 'Hero Detail',
            headerBackTitle: 'Back',
            headerShadowVisible: true, 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
