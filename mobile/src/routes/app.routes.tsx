import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import TreinosScreen from '../screens/Treinos';
import ProgressosScreen from '../screens/Progressos';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={HomeScreen} />
      <Screen name='Treinos' component={TreinosScreen} />
      <Screen name='Progressos' component={ProgressosScreen} />
    </Navigator>
  );
}
