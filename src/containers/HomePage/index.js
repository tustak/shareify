import React from 'react';
import styled from 'styled-components';

import TestComponent from '../../components/TestComponent';

const Wrapper = styled.div`
    padding-top: 90px;
`;


export default class HomePage extends React.Component {
    render() {
        return (
            <Wrapper className="container">
                <TestComponent />
            </Wrapper>
        )
    }
}