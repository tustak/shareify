import React from 'react';
import styled from 'styled-components';

import {
    RowWithButton
} from "../../components/RowWithButton/RowWithButton";

import {
    Advantages
} from "../Sections/Advantages";
import {
    HowItWorks
} from "../Sections/HowItWorks";

const Wrapper = styled.div`
    padding-top: 100px;
`;


export default class HomePage extends React.Component {
    render() {
        return (
            <Wrapper>
                <RowWithButton
                    color="#1ed760"
                    link="/ask/new"
                    title="Need to borrow anything?"
                    buttonText="Ask for it!"
                />
                <RowWithButton
                    color="#38a9ff"
                    link="/offer/new"
                    title="Do you have anything to offer?"
                    buttonText="Start sharing it!"
                />

                <Advantages />
                <HowItWorks />
            </Wrapper>
        )
    }
}