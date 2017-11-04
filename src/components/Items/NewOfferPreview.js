import React from 'react';
import { connect } from 'react-redux';

import {
    Block,
    BlockTitle
} from "../../containers/Blocks/Block";

import {
    ButtonColor
} from "../../containers/Buttons/Buttons";

import { Map } from "../Maps/Map"

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
                    <h5><span className="h5 bold">Location: </span>{newOffer.places[0]? newOffer.places[0].formatted_address : ''}</h5>
                </BlockTitle>
                <BlockTitle>
                    <Map
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8zfwWQ-K9UXLe64adjv_dn8ELzk6yLdA&libraries=geometry,drawing,places"
                        loadingElement={<div></div>}
                        containerElement={<div style={{ height: `200px`, verticalAlign:`inherit`}} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        latitude={this.props.newOffer.places[0]? this.props.newOffer.places[0].geometry.location.lat(): 55.676372}
                        longitude={this.props.newOffer.places[0]? this.props.newOffer.places[0].geometry.location.lng(): 12.568196}
                    />
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

