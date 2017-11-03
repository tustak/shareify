import styled from 'styled-components';

export const ButtonOrange = styled.button`
    background-color: #ff5e3a;
    border-color: #ff5e3a;
    color: #fff;
    border-radius: 5px;
    width: 100%;
    :active {
        background-color: #ff3f14;
        border-color: #ff3f14;   
    }
    :hover {
        background-color: #ff763a;
        border-color: #ff763a;
    }
`;

export const ButtonGray = styled.button`
    background-color: #9a9fbf;
    border-color: #9a9fbf;
    color: #fff;
    border-radius: 5px;
    width: 100%;
    :active {
        background-color: #9aaafcf;
        border-color: #aaafcf;   
    }
    :hover {
        background-color: #aaafcf;
        border-color: #aaafcf;
    }
`;

export const ButtonColor = styled.button`
    background-color: ${props => props.color ? props.color : 'black'};
    border-color: ${props => props.color ? props.color : 'black'};
    color: ${props => props.textColor ? props.textColor : '#fff'};
    border-radius: 5px;
    width: ${props => props.buttonWidth? props.buttonWidth : '200px'};
    :active {
        background-color: ${props => props.color ? props.color : 'black'};
        border-color: ${props => props.color ? props.color : 'black'};
    }
    :hover {
        background-color: ${props => props.color ? props.color : 'black'};
        border-color: ${props => props.color ? props.color : 'black'};
    }
`;