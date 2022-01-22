import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Tab_1 = () => {
  return (
    <View style={styles.center}>
      <Text>This is Tab 1 screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Tab_1;
