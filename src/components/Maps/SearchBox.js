import React from 'react';
import { connect } from 'react-redux';

import {
    setPlaces
} from "../../redux/actions/uiActions";

import {
    compose,
    withProps,
    lifecycle
} from 'recompose';

import {
    withScriptjs
} from 'react-google-maps';

import StandaloneSearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox";

import {
    InputFormControl
} from "../../containers/Inputs/Inputs";

const mapStateToProps = (state) => {
    return {
        newOffer: state.ui.forms.newOffer
    }
};

const PlacesSearchBox = connect(mapStateToProps)(compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA8zfwWQ-K9UXLe64adjv_dn8ELzk6yLdA&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
    }),
    lifecycle({

        componentWillMount() {
            const refs = {};

            this.setState({
                places: [],
                onSearchBoxMounted: ref => {
                    refs.searchBox = ref;
                },
                onPlacesChanged: () => {
                    const places = refs.searchBox.getPlaces();
                    this.setState({
                        places,
                    });
                    console.log(this.state);
                    this.props.dispatch(setPlaces("newOffer", places))
                },
            })
        },
    }),
    withScriptjs
)(props =>
    <div data-standalone-searchbox="">
        <StandaloneSearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            onPlacesChanged={props.onPlacesChanged}
        >
            <InputFormControl name="location" className="form-control" placeholder="" type="text" />
        </StandaloneSearchBox>
    </div>
));

export default PlacesSearchBox;
