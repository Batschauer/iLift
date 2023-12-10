import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default () => {
  return (
    <View className='w-full h-full flex justify-center items-center bg-background'>
      <Text className='font-700 text-terciary-7 text-h2'>Hello, Nathan!</Text>
      <StatusBar style='auto' />
    </View>
  );
};
