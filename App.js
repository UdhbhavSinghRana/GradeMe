import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './screens/Home';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './screens/Header';
import Myfeed from './screens/Myfeed';

export default function App() {
  
  
  return (
    <>
    <View className="bg-[#1A1A1A]">
        <Header/>
    </View>
    <ScrollView className="flex-1  bg-[#1A1A1A]  ">
      <Myfeed />
      <StatusBar 
      hidden={true}/>
      <Home/>
      <Home/>      
    </ScrollView>
  </>
  );
}