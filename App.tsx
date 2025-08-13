import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./global.css"
import SkipSection01 from "./features/screens/SkipSection01";

export default function App() {
  return (
    <View className='flex-1 bg-orange-600 items-center justify-center'>
    <SkipSection01 />
    </View>
  );
}
