import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FormRow = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    button {
        width: 100%;
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    padding-bottom: 1rem;
`;