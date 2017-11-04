import React from 'react';
import styled from 'styled-components';

import {
    compose,
} from 'recompose';

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
} from 'react-google-maps';




const Wrapper = styled.div`
    height: 250px;
    width: 100px;
`;


export const Map = compose(
    withScriptjs,
    withGoogleMap
) (props =>
    <Wrapper>
        <GoogleMap
            key={Math.random()}
            defaultZoom={11}
            defaultCenter={{
                lat: props.latitude,
                lng: props.longitude,
            }}
        >
        </GoogleMap>
    </Wrapper>

);
