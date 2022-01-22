import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, TabStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TAB_1" component={MainStackNavigator} />
      <Tab.Screen name="TAB_2" component={TabStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
