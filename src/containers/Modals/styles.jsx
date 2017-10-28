
import React from 'react';
import styled from 'styled-components';

export const Backdrop = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1000px;
    background-color: rgba(0,0,0,0.3);
    padding-top: 100px;
`;

export const Wrapper = styled.div`
    background-color: white;
    display: block!important;
    width: 476px;
    max-width: calc(100% - 40px);
    border-radius: 5px;
    border: 1px solid #e6ecf5;
    margin-bottom: 15px;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    left: calc(50% - 237px);
`;

export const ModalTitle = styled.div`
    padding: 23px 25px 18px;
    line-height: 1;
    border-bottom: 1px solid #e6ecf5;
    border-top: 1px solid #e6ecf5;
    display: table;
    width: 100%;
    position: relative;
    > h6 {
        color: #515365;
        margin-bottom: 0;
        display: table-cell;
        vertical-align: middle;
        font-size: 14px;
        font-weight: bold;
    };
`;

export const ModalFormWrapper = styled.div`
    padding: 24px 23px 23px;
`;

export const ModalFormElementWrapper = styled.div`
    * > input {
        margin-bottom: 25px;
        position: relative;
        display: block;
    }
`;

export const ModalFormLabel = styled.label`
    top: 10px;
    font-size: 11px;
    line-height: 1.07;
    position: absolute;
    left: 20px;
    color: #888da8;
`;

export const ModalFormInput = styled.input`
    padding: 20.8px 17.6px 6.4px;
    height: 60px;
    color: #515365;
    font-size: 14px;
    background-color: transparent;
`;

export const ToggleWrapper = styled.div`
    vertical-align: middle;
    margin-bottom: 20px;
    input {
        opacity: 0;
        height: 0;
        :checked {
            background-color: #ff5e3a;
        }
    }
    span {
        content: "";
        display: inline-block;
        width: 66px;
        height: 30px;
        border-radius: 15px;
        margin-right: 0;
        transition: background 0.3s ease;
        ::after {
            content: "";
            display: inline-block;
            width: 24px;
            height: 24px;
            line-height: 26px;
            background-color: #fff;
            border-radius: 20px;
            position: relative;
            left: 3px;
            top: 3px;
            transition: left 0.3s ease;
            text-align: center;
        }
    }
`;

export const ToggleButton = () => (
    <ToggleWrapper>
        <input type="checkbox"/>
        <span/>
    </ToggleWrapper>
);

export const ModalButton = styled.button`
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