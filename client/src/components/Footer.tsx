import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
    display: flex;
    gap: 8px;

    margin-top: 15px;
    padding-top: 15px;

    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

const FooterItem = styled.span``;

type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};

export const Footer = (props: FooterProps) => {
    const { todoItems, doneItems } = props;

    return (
        <FooterStyled>
            <FooterItem>Todo: {todoItems ?? 0}</FooterItem>
            <FooterItem>Done: {doneItems ?? 0}</FooterItem>
        </FooterStyled>
    );
};
