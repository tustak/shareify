import React from 'react';
import styled from 'styled-components';

import {
    compose,
} from 'recompose';

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Circle
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
            defaultZoom={10}
            defaultCenter={{
                lat: props.latitude,
                lng: props.longitude,
            }}
            options={{
                zoomControl:false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false
            }}
        >
            <Circle
                center={{ lat: props.latitude, lng: props.longitude }}
                radius={props.radiusOfSearch}
            />

        </GoogleMap>
    </Wrapper>

);
