import React from 'react';
import { connect } from 'react-redux';

import {
    Block,
    BlockTitle
} from "../../containers/Blocks/Block";

import {
    ButtonColor
} from "../../containers/Buttons/Buttons";

const mapStateToProps = (state) => {
    return {
        newOffer: state.ui.forms.newOffer
    }
};

class NewOfferPreview extends React.Component {

    render() {
        const {newOffer} = this.props;
        return(
            <Block>
                <BlockTitle>
                    <h5><span className="h5 bold">Item: </span>{newOffer.item? newOffer.item : "Your item"}</h5>
                </BlockTitle>
                <BlockTitle>
                    <h5><span className="h5 bold">Quantity: </span>{newOffer.quantity}</h5>
                </BlockTitle>
                <BlockTitle>
                    <h5><span className="h5 bold">Description: </span>{newOffer.description}</h5>
                </BlockTitle>
                <BlockTitle>
                    <h6>Location:</h6>
                </BlockTitle>
                <BlockTitle>
                    <ButtonColor
                        color="#ff5e3a"
                        buttonHeight="40px"
                    >
                        Offer
                    </ButtonColor>
                </BlockTitle>
            </Block>
        )
    }
}

NewOfferPreview = connect(mapStateToProps)(NewOfferPreview);

export default NewOfferPreview;

