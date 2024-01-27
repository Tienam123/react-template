import styled from '@emotion/styled';
import '../../color-pallete.scss';

export const Card = styled.div`
    position: relative;
    border: 2px dashed black;
    padding: 8px;
    border-radius: 4px;
`;

export const EventName = styled.h2`
    margin-top: 0;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`;

export const Info = styled.p`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 8px;
    color: $color-primary-text;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.25px;

    &:hover {
        color: red;

        svg {
            color: red;
        }
    }

    svg {
        display: inline-block;
        margin-right: 8px;
        color: #757575;


    }
`;

export const Chip = styled.span`
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    color: #fff;
    background-color: ${(props) => {
        console.log(props.theme);
        switch (props.type) {
            case 'free':
                return props.theme.colors.colorBlue;
            case
            'paid':
                return props.theme.colors.colorGreen;
            case
            'vip':
                return props.theme.colors.colorRed;
            default:
                return 'black';
        }
    }};

`;