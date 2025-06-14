import { useContext } from "react";
import styled from "styled-components";
import { AppErrorsContext } from "./providers/AppErrorsProvider";

const StyledDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    max-width: 600px;

    margin-inline: auto;
    padding: 1.8rem;

    background-color: ${(props) => props.theme.colors.red3};
    color: ${(props) => props.theme.colors.red12};
    border-radius: 5px;
`;

export const GlobalErrorsDisplay = () => {
    const { errors } = useContext(AppErrorsContext);

    if (errors.length === 0) {
        return null;
    }

    return (
        <StyledDiv>
            <ul>
                {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
        </StyledDiv>
    );
};
