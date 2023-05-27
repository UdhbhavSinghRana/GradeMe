import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, Button } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1  bg-[#060f21]">
      <View className="py-16 px-5  text-white">
        <Text className="text-3xl font-extralight text-white">My Feed</Text>
        <View className="flex-row py-10 items-center">
          <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{width: 40, height: 40}} className=" rounded-full"/>
          <View className="flex-row gap-x-28">
            <Text className="text-white px-2 ">Peter Griffin</Text>
            <Text className="text-gray-700  text-xs">2 Mins ago</Text>
          </View>
        </View>
        <View className="flex gap-5">
            <Text className="text-slate-300">Exciting news! 🌟 Introducing the all-new SingSkill app! 🎤🎶 Now you can rate yourself and showcase your singing prowess like never before. 🌟🎵🎉 Unleash your inner superstar and receive valuable feedback to help you grow.</Text>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{width: 330, height: 300}} className=""/>
            <Button
            title="Learn More"
            color="#841584"
            className="" 
            />
        </View>
      </View>
    </View>
  );
}