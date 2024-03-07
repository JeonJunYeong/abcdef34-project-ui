import styled from "styled-components";

export interface StyledTitleProps {
    backgroundColor?: string;
    fontSize?: 'small' | 'medium' | 'large';
}

const fontGroup = {
    small: '1em',
    medium: '2em',
    large: '3em'

}
export const StyledTitle = styled.h1<StyledTitleProps>`
    display: inline-block; 
    font-size: ${(props) => (fontGroup[props.fontSize || 'small'])};
    font-weight: bold;
    background-color: ${(props) => (props.backgroundColor)};
`