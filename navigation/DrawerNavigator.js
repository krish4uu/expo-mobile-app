import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { JokeStackNavigator} from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Show me a joke" component={JokeStackNavigator} />

    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
