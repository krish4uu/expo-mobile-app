import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Tab1 from "../screens/Tab1";
import Tab2 from "../screens/Tab2";
import Joke from "../screens/Joke";
import JokeData from "../jokeApi/JokeData"

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Tab_1" component={Tab1} />
    </Stack.Navigator>
  );
}

const JokeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Joke" component={JokeData} />
    </Stack.Navigator>
  );
}

const TabStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Tab_2" component={Tab2} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, TabStackNavigator, JokeStackNavigator };
