import styled from 'styled-components';

export const StyledMain = styled.main`
  padding: 50px;
    & h1 {
        color: #FFF;
        font-family: "Source Sans";
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    & p.post {
        color: #FFF;
        font-family: "Source Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 175% */
    }
    & div.mission {
        font-size: 50px;
    }
    & div.date {
        color: rgba(255, 255, 255, 0.60);
        font-family: "Source Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`;

export const StyledTitle = styled.h1`
    color: #FFF;
    font-family: "Source Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;`;