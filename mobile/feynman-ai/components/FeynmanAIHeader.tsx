import * as React from 'react';
import {View, Text} from 'react-native';
import {StyledComponent} from "nativewind";

export default function FeynmanAiHeader(){
    return (
        <StyledComponent component={View} className="top-14 bg-cyan-200">
            <StyledComponent component={Text} className={"text-3xl text-center"}>Feynman AI</StyledComponent>
        </StyledComponent>
    );
};