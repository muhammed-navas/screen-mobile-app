import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function SkipSection01() {
  return (
    <View className='flex-1 bg-blue-800 items-center justify-center'>
      <Text className='font-bold text-white text-xl'>What You Want </Text>
      <StatusBar style="light" />
    </View>
  );
}