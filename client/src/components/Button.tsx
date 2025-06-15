import React from "react";
import { css, DefaultTheme, styled } from "styled-components";

type ButtonProps = {
    children: React.ReactNode;

    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    disabled?: boolean;
    primary?: boolean;
    ariaLabel?: string;
};

export const getPrimaryButtonStyle = (theme: DefaultTheme) => css`
    width: 25px;
    height: 25px;

    padding: 0;

    background-color: ${theme.colors.grass9};
    color: #fff;

    border: 1px solid;
    border-color: ${theme.colors.olive9};
    border-radius: 50%;
`;

const ButtonStyled = styled.button<{ $primary?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }

    ${(props) => {
        if (props.$primary) {
            return getPrimaryButtonStyle(props.theme);
        }

        return "";
    }}
`;

export const Button = ({ children, ariaLabel, primary, ...others }: ButtonProps) => (
    <ButtonStyled {...others} aria-label={ariaLabel} $primary={primary}>
        {children}
    </ButtonStyled>
);
