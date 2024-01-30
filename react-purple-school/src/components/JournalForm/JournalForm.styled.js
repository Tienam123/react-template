import styled from 'styled-components';

export const StyledForm = styled.main`
    padding: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & form {
        width: 500px;
        display: flex;
        gap: 50px;
        flex-direction: column;
    }

    & h2 {
        font-weight: 700;
        font-size: 36px;
    }

    & input[type="date"] {
        font-weight: 700;
    }

    & input {
        border: 1px solid white;
        background: #000;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
    }

    & input, textarea {
        &:focus-within {
            border: 1px solid gray;
        }
    }

    & textarea {
        border: 1px solid white;
        background: #000;
        color: white;
        border-radius: 5px;
        resize: none;
        padding: 20px;
    }
`;
  
