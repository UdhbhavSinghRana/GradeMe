import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Text, View, Image, Button, TouchableOpacity, StyleSheet, Pressable, } from 'react-native';

function Header() {
  return (
    <View>
      <View className='bg-[#1A1A1A]  px-5 pt-20'>
        <Text className="text-3xl font-extralight text-[#E5E5E5]">My Feed</Text>
      </View>
    </View>
  )
}
export default Header