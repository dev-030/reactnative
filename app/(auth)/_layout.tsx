import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";



export default function AuthLayout() {
  return (
    <View className="">
       
        <Slot/>

        <StatusBar backgroundColor="#161622" style="light" />
    </View>
  );
}