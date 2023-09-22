import * as React from 'react';
import {View, Text} from 'react-native';
import {StyledComponent} from "nativewind";

export default function FeynmanAiFooter(){
    return (
        <StyledComponent component={View} className="bottom-14 bg-cyan-200">
            <StyledComponent component={Text} className={"text-xl text-center"}>All rights Reserved</StyledComponent>
        </StyledComponent>
    );
};