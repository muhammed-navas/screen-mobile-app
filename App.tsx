import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 bg-blue-500  justify-center items-center">
      <Text className="text-white text-xl font-semibold">
        Welcome to my app !!!!!!!!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
