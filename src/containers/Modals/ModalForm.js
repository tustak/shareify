import React from 'react';
import styled from 'styled-components';

import ModalFormElement from './ModalFormElement';

const ModalFormWrapper = styled.div`
    padding: 24px 23px 23px;
`;

const ModalFormLabel = styled.label`
    top: 10px;
    font-size: 11px;
    line-height: 1.07;
    position: absolute;
    left: 20px;
    color: #888da8;
`;

const ModalFormInput = styled.input`
    padding: 20.8px 17.6px 6.4px;
    height: 60px;
    color: #515365;
    font-size: 14px;
    background-color: transparent;
`;

const ModalForm = () => (
    <ModalFormWrapper>
        <form action="/">
            <div className="row">
            </div>
        </form>
    </ModalFormWrapper>
);

export default ModalForm;