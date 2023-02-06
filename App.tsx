import React from "react";
import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";

import { Loading } from "./src/components/Loading";
import { Home } from "./src/screens/Home";
import { CategoryProvider } from "./src/context/CategoryContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <CategoryProvider>
        <Home />
      </CategoryProvider>
    </ThemeProvider>
  );
}
