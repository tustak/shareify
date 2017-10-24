import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    padding-top: 100px;
`;

export default Backdrop;