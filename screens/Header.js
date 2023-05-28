import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Text, View, Image, Button, TouchableOpacity, StyleSheet, Pressable, } from 'react-native';

function Header() {
  
  return (
    <View>
      <View className="flex-row justify-between text-white mt-3 px-5 h-14 fixed top-0">
        <Image source={require('../assets/menu.png')} className='w-10 h-10'></Image>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}} className='w-10 h-10 rounded-full'></Image>
      </View>
    </View>
  )
}

export default Header