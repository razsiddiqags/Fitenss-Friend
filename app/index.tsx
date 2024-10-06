import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Hello Guys</Text>
      <StatusBar style="auto" />
    </View>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});
