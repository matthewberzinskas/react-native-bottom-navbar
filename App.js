import * as React from "react";
import { Text, View, StatusBar, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigation from "./navigation/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <RootNavigation />
    </NavigationContainer>
  );
}
