import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {StyledComponent} from "nativewind";
import FeynmanAiHeader from "./components/FeynmanAIHeader";


import FeynmanAiFooter from "./components/FeynmanAIFooter";

export default function App() {
  return (
    <StyledComponent component={View} className={"flex-1 justify-between items-stretch bg-cyan-100"}>
      <FeynmanAiHeader/>
      <FeynmanAiFooter/>
      <StatusBar style="auto" />
    </StyledComponent>
  );
}