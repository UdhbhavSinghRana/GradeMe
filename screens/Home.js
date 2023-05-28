import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Text, View, Image, Button, TouchableOpacity, StyleSheet, Pressable, } from 'react-native';


export default function Home() {
  const [ like, setLike ] = useState(false);

  const handleLike = () => {
    setLike(!like);
  }

  return (
    <View className="flex-1  bg-[#1A1A1A]">
      <View className="pb-10 px-5  ">
        <View className="flex-row pt-7 pb-5 items-center justify-between">
          <View className="flex-row items-center">
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                  style={{width: 40, height: 40}} className=" rounded-full"/>
            <Text className="text-[#E5E5E5] px-2 ">Peter Griffin</Text>
          </View>
          <View className="flex-row ">
            <Text className="text-white font-extralight  text-xs">2 Mins ago</Text>
          </View>
        </View>
        <View className="flex gap-5">
            <Text className="text-slate-300 leading-6">Exciting news! 🌟 Introducing the all-new SingSkill app! 🎤🎶 Now you can rate yourself and showcase your singing prowess like never before. 🌟🎵🎉 Unleash your inner superstar and receive valuable feedback to help you grow.</Text>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} className="w-fit h-56"/>
            <View className="flex flex-row w-2/3 gap-x-2" >
              <TouchableOpacity title="Like" className={`border-2 border-red-800 w-1/3 rounded-lg  py-1 ${like ? 'bg-red-800  ' : ''}`} onPress = {handleLike}>
                <Text className={`text-red-800 text-center ${like ? 'text-black  ' : ''}`}>♡ Like</Text>
              </TouchableOpacity>
              <TouchableOpacity title="Like" className="border-2 border-gray-500 w-1/2 rounded-lg px-2 py-1 ">
                <Text className="text-center text-gray-500">💬 Comment</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
}