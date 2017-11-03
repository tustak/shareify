import React from 'react';

import {Advantage} from '../../components/Advantages/Advantage';

export const Advantages = () => (
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="container">
                    <h2 className="presentation-margin">Advantages</h2>
                </div>
            </div>

            <Advantage title="Help your pocket"
                       advantageBrief="Stop wasting money on things that you will use one time"
                       advantageDescription="Need a tool for one work? A dress for a wedding? A bicycle for the city you just arrived to?"/>
            <Advantage title="Help the Earth"
                       advantageBrief="Don't buy things that will end up in the trash"
                       advantageDescription="Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et." />
            <Advantage title="Help others"
                       advantageBrief="Help that neighbour or traveller who is looking for what you don't use"
                       advantageDescription="Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et."/>
            <Advantage title="Alguna otra"
                       advantageBrief="Alguna ventaja de usarnos, como ahorrar tiempo"
                       advantageDescription="Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et."/>

        </div>
    </div>
);