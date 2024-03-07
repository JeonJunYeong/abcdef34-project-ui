import styled from "styled-components";


export interface StyledTextBoxProps {
    backgroundColor?: string;
    fontColor?: string;
}

export const StyledTextBox = styled.span<StyledTextBoxProps>`
    background-color: ${(props) => (props.backgroundColor)};
    color: ${(props) => (props.fontColor)};
    padding: 4px;
    border-radius: 6px;
`