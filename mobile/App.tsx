import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Routes } from './src/routes';
import { SafeAreaView, StatusBar } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Quicksand-Light': require('./assets/Fonts/Quicksand-Light.ttf'),
    'Quicksand-Regular': require('./assets/Fonts/Quicksand-Regular.ttf'),
    'Quicksand-Medium': require('./assets/Fonts/Quicksand-Medium.ttf'),
    'Quicksand-SemiBold': require('./assets/Fonts/Quicksand-SemiBold.ttf'),
    'Quicksand-Bold': require('./assets/Fonts/Quicksand-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return fontsLoaded ? (
    <SafeAreaView className='flex-1 justify-center bg-background'>
      <Routes />
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
    </SafeAreaView>
  ) : null;
}
