import React from 'react';
import styled from 'styled-components';

import TestComponent from '../../components/TestComponent';

import {
    Block,
    BlockTitle
} from '../Blocks/Block';

import {
    ButtonGreen
} from "../Buttons/Buttons";

const Wrapper = styled.div`
    padding-top: 100px;
`;


export default class HomePage extends React.Component {
    render() {
        return (
            <Wrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <div className="h6 title">sadssdasda ds as sad sad </div>
                                    <div className="align-right">
                                        <ButtonGreen className="btn btn-green btn-md">
                                            Ask
                                        </ButtonGreen>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}