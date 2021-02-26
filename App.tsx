import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AnimatePresence } from "framer-motion";
import { View } from "moti";
import * as React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

function KevinScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
function StephanoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Jelte" component={JelteScreen} />
        <Tab.Screen name="Kevin" component={KevinScreen} />
        <Tab.Screen name="Stephano" component={StephanoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Shape({ bg }) {
  return (
    <View
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      style={[styles.shape, { backgroundColor: bg }]}
    />
  );
}

function JelteScreen() {
  const [visible, toggle] = React.useReducer((s) => !s, true);
  return (
    <Pressable onPress={toggle} style={styles.container}>
      <AnimatePresence exitBeforeEnter>
        {visible && <Shape bg="hotpink" key="hotpink" />}
        {!visible && <Shape bg="cyan" key="cyan" />}
      </AnimatePresence>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#9c1aff",
  },
});
