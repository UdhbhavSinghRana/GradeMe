import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Text, View, Image, Button, TouchableOpacity, StyleSheet, Pressable, } from 'react-native';

function Header() {
  return (
    <View>
      
      <Text className="text-white mt-3 px-5">hello</Text>
      <View className='bg-[#1A1A1A] mt-10 px-5'>
        <Text className="text-3xl font-extralight text-[#E5E5E5]">My Feed</Text>
      </View>
    </View>
    
  )
}

export default Header