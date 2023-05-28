import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './screens/Home';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './screens/Header';

export default function App() {
  
  return (
    <ScrollView className="flex-1  bg-[#1A1A1A]  ">
      <StatusBar 
      hidden={true}/>
      <View className="">
        <Header/>
      </View>
      <Home/>
      <Home/>      
    </ScrollView>
    
  );
}