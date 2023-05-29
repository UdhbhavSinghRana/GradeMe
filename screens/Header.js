import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Text, View, Image, Button, TouchableOpacity, StyleSheet, Pressable, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';


function Header() {
  
  return (
    <View className="">
      <View className="flex-row justify-between items-center text-white mt-3 px-5 h-14  ">
        <Ionicons name="menu" size={32} color="#E5E5E5" />
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}} className='w-10 h-10 rounded-full'></Image>
      </View>
    </View>
  )
}

export default Header