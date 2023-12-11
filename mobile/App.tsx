import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Routes } from './src/routes';
import { SafeAreaView, StatusBar } from 'react-native';

import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import schema from './src/model/schema';
import migrations from './src/model/migrations';
import { Database } from '@nozbe/watermelondb';
import { DatabaseProvider } from '@nozbe/watermelondb/react';

import User from './src/model/User';
import Exercise from './src/model/Exercise';
import Setting from './src/model/Setting';
import Record from './src/model/Record';

SplashScreen.preventAutoHideAsync();

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError(error) {
    console.log('[error] Failed to load DB', error);
  },
});

const database = new Database({
  adapter,
  modelClasses: [User, Exercise, Setting, Record],
});

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
      <DatabaseProvider database={database}>
        <Routes />
        <StatusBar
          barStyle='dark-content'
          backgroundColor='transparent'
          translucent
        />
      </DatabaseProvider>
    </SafeAreaView>
  ) : null;
}
