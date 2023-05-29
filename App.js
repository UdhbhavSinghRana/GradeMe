import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './screens/Home';
import { Text, View, Image, Button, ScrollView, Animated } from 'react-native';
import Header from './screens/Header';
import Myfeed from './screens/Myfeed';

export default function App() {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 70);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 70],
    outputRange: [0, -70]
  });

  return (
  <>
    
    <ScrollView className="bg-[#1A1A1A] relative " onScroll={(e) => { scrollY.setValue(e.nativeEvent.contentOffset.y) }}>
      <Myfeed />
      <StatusBar 
      hidden={true}/>
      <Home/>
      <Home/>      
    </ScrollView>
    <Animated.View className="bg-[#1A1A1A] absolute top-0 right-auto left-0 w-full shadow-2xl shadow-gray-700" style={{transform: [ {translateY: translateY} ]}}>
      <Header/>
    </Animated.View>
  </>
  );
}