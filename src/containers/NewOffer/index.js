import React from 'react';
import styled from 'styled-components';

import NewOffer from '../../components/Forms/NewOffer';
import NewOfferPreview from '../../components/Items/NewOfferPreview';

import {
    Block,
    BlockTitle,
    BlockContent
} from "../Blocks/Block";


const NewOfferWrapper = styled.div`
    padding-top: 100px;
`;

const Settings = () => (
    <NewOfferWrapper>
        <div className="container">
            <div className="row">
                <div className="col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12">
                    <Block>
                        <BlockTitle to="/">
                            <h6>Offer something you are not using</h6>
                        </BlockTitle>
                        <BlockContent>
                            <NewOffer />
                        </BlockContent>
                    </Block>
                </div>
                <div className="col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none">
                    <NewOfferPreview />
                </div>
            </div>
        </div>
    </NewOfferWrapper>
);

export default Settings;