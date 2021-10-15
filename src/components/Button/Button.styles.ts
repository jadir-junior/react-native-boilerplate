import styled, { css } from "styled-components/native";

import { ButtonProps } from "./Button.component";

type ButtonStyleProps = Pick<ButtonProps, "color">;

export const Button = styled.TouchableOpacity<ButtonStyleProps>`
  ${({ color }) => css`
    background-color: ${color === "primary" ? "black" : "white"};
  `}
`;

export const ButtonText = styled.Text<ButtonStyleProps>`
  ${({ color }) => css`
    color: ${color === "primary" ? "white" : "black"};
  `}
`;
