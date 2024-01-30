import styled from 'styled-components';

export const PostItemStyled = styled.li`
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.03);
    padding: 20px;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.55;
    font-size: 18px;

    & .body {
        font-size: 16px;
        font-weight: 400;
        display: flex;
        gap: 10px;

        .date {
            color: rgba(255, 255, 255, 0.40);
        }

        .text {
            color: rgba(255, 255, 255, 0.60);
        }
    }
`;

