import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './screens/Home';
import { Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View className="flex-1  bg-[#060f21]">
      <Home/>
    </View>
  );
}