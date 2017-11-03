import React from 'react';
import styled from 'styled-components';

/*import {
    Block,
    BlockTitle
} from '../Blocks/Block';*/

import {
    ButtonGreen
} from "../Buttons/Buttons";

import {
    RowWithButton
} from "../../components/RowWithButton/RowWithButton";

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
            </Wrapper>
        )
    }
}