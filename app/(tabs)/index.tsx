import "../globals.css"
import { Text, View, } from "react-native";
import { Link } from "expo-router";


export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-blue-500 font-bold">Welcome !</Text>
      <Text className="text-3xl text-yellow-400 font-bold">This is a movie app</Text>
     

    </View>
  );
}

 