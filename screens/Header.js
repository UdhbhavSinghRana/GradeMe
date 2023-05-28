import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Text, View, Image, Button, TouchableOpacity, StyleSheet, Pressable, } from 'react-native';

function Header() {
  return (
    <View>
      <View className="flex-row justify-between text-white mt-3 px-5 sticky">
        <Image source={require('../assets/menu.png')} className='w-10 h-10'></Image>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}} className='w-10 h-10 rounded-full'></Image>
      </View>
      <View className='bg-[#1A1A1A] mt-5 px-5'>
        <Text className="text-3xl font-extralight text-[#E5E5E5]">My Feed</Text>
      </View>
    </View>
  )
}

export default Header