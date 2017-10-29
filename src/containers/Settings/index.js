import React from 'react';
import styled from 'styled-components';

import {
    Block,
    BlockTitle,
    BlockLink,
    BlockRoundItem,
    BlockContent
} from "../Blocks/Block";

const SettingsWrapper = styled.div`
    padding-top: 100px;
`;

const Settings = () => (
    <SettingsWrapper>
        <div className="container">
            <div className="row">
                <div className="col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none">
                    <Block>
                        <BlockLink to="/">
                            <h6>Personal settings</h6>
                        </BlockLink>
                        <BlockLink to="/">
                            <h6>Messages</h6>
                            <BlockRoundItem>
                                6
                            </BlockRoundItem>
                        </BlockLink>
                        <BlockLink to="/">
                            <h6>asd</h6>
                        </BlockLink>
                    </Block>
                </div>
                <div className="col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12">
                    <Block>
                        <BlockTitle to="/">
                            <h6>Personal Information</h6>
                        </BlockTitle>
                        <BlockContent>
                            <div>name</div>
                            <div>surname</div>
                            <div>asdds</div>
                        </BlockContent>
                    </Block>
                </div>
            </div>
        </div>
    </SettingsWrapper>
);

export default Settings;