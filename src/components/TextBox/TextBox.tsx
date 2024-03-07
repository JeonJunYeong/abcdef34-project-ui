import React from "react";
import {StyledTextBox, StyledTextBoxProps} from "./StyledTextBox";


export interface TextBoxProps extends StyledTextBoxProps{
    text: string;
}

export const TextBox = (props:TextBoxProps) => {
    return <StyledTextBox
        backgroundColor={props.backgroundColor}
        fontColor={props.fontColor}
    >{props.text}</StyledTextBox>
}