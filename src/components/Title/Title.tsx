import React from 'react';
import {StyledTitle, StyledTitleProps} from "./StyledTitle";

interface TitleProps extends StyledTitleProps{
    text: string;
}

export const Title = (props:TitleProps) => {

     return <StyledTitle
         backgroundColor={props.backgroundColor}
         fontSize={props.fontSize}
     >{props.text}
     </StyledTitle>

}