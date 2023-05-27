import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './screens/Home';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './screens/Header';

export default function App() {
  return (
    <ScrollView className="flex-1  bg-[#1A1A1A]  ">
      <View className="bg-[#] mt-16 px-5">
        <Header/>
      </View>
      <Home/>
      <Home/>

    </ScrollView>
  );
}