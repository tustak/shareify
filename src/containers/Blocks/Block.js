import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Block = styled.div`
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #e6ecf5;
    margin-bottom: 15px;
`;

export const BlockLink = styled(Link)`
    padding: 23px 25px 18px;
    line-height: 1;
    border-bottom: 1px solid #e6ecf5;
    border-top: 1px solid #e6ecf5;
    display: table;
    width: 100%;
    position: relative;
    border-radius: 5px 5px 0 0;
    > * {
        margin-bottom: 0;
        display: table-cell;
        vertical-align: middle;
    }
    :hover h6 {
        color: #ff5e3a;
        text-decoration: none!important;
    }
    > h6 {
        color: #515365;
        font-weight: 700;
        line-height: 1.3;
        font-size: 14px;
        :hover {
            color: #ff5e3a;
            text-decoration: none!important;
        }
    }
    :first-child {
        border-top: none;
    }
`;

export const BlockTitle = styled.div`
    padding: 23px 25px 18px;
    line-height: 1;
    border-bottom: 1px solid #e6ecf5;
    border-top: 1px solid #e6ecf5;
    display: table;
    width: 100%;
    position: relative;
    border-radius: 5px 5px 0 0;
    > * {
        margin-bottom: 0;
        display: table-cell;
        vertical-align: middle;
    }
    > h6 {
        color: #515365;
        font-weight: 700;
        line-height: 1.3;
        font-size: 14px;
    :first-child {
        border-top: none;
    }
`;

export const BlockRoundItem = styled.div`
    color: #fff;
    font-weight: 700;
    font-size: 10px;
    text-align: center;
    width: 18px;
    height: 18px;
    line-height: 18px;
    border-radius: 100%;
    margin-left: 12px;
    background-color: #38a9ff;
`;

export const BlockContent = styled.div`
    padding: 24px 23px 23px;
`;

