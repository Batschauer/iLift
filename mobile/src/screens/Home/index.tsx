import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ({ navigation, route }: any) => {
  const treinos = [
    { id: 1, label: 'Ombros' },
    { id: 2, label: 'Dorsal' },
    { id: 3, label: 'Peito' },
  ];

  return (
    <View className='w-full h-full flex items-center'>
      <View className='w-full h-28 flex gap-4 flex-row items-center px-2'>
        <Image
          className='rounded-full w-16 h-16 shadow-default'
          source={require('../../assets/Images/profile.jpg')}
        />
        <Text className='font-700 text-h2'>Olá, Batucha!</Text>
      </View>
      <View className='w-full flex flex-row justify-between px-4 py-2'>
        <View className='rounded-lg shadow-default p-2 w-24 bg-terciary-1'>
          <MaterialCommunityIcons
            name='calendar-today'
            size={24}
            color='#01261C'
          />
          <Text className='text-secondary-1 text-h3 font-700'>03 de fev</Text>
        </View>
        <View className='rounded-lg shadow-default p-2 w-24 bg-terciary-1'>
          <MaterialCommunityIcons
            name='clock-outline'
            size={24}
            color='#01261C'
          />
          <Text className='text-secondary-1 text-h3 font-700'>19:41</Text>
        </View>
        <View className='rounded-lg shadow-default p-2 w-24 bg-terciary-1'>
          <MaterialCommunityIcons
            name='thermometer'
            size={24}
            color='#01261C'
          />
          <Text className='text-secondary-1 text-h3 font-700'>27°C</Text>
        </View>
      </View>
      <View className='flex flex-col px-4 gap-2 w-full'>
        <View className='flex flex-row justify-between ml-0'>
          <Text className='text-terciary-7 text-h3 font-700'>Treinos</Text>
          <View className='bg-primary-1 px-4 rounded-2xl h-[18]'>
            <Text className='text-terciary-7 text-paragraph font-700'>
              ver tudo
            </Text>
          </View>
        </View>
        {treinos.map((treino) => (
          <View
            key={treino.id}
            className='flex flex-row items-center justify-between shadow-default bg-secondary-1 rounded-lg py-4 px-2'
          >
            <Text className='text-paragraph font-700 text-terciary-1'>
              {treino.label}
            </Text>
            <MaterialCommunityIcons name='pencil' size={24} color='#F9F9F9' />
          </View>
        ))}
      </View>
      <View className='w-full px-4'>
        <View>
          <Text className='text-h3 font-700 text-terciary-7 w-full text-left'>
            Progressos
          </Text>
          <View className='flex flex-row shadow-default rounded-3xl bg-primary-1 py-1 px-2 align-center'>
            <Text className='text-terciary-7 text-paragraph text-center font-500'>
              Pernas
            </Text>
            <MaterialCommunityIcons
              name='chevron-down'
              size={24}
              color='#282828'
            />
          </View>
        </View>
      </View>
    </View>
  );
};
