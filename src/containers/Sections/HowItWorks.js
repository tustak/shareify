import React from 'react';

import {Step} from '../../components/Steps/Step';

export const HowItWorks = () => (
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="container">
                    <h2 className="presentation-margin">How it works</h2>
                </div>
            </div>

            <Step title="Do you need anything?"
                       advantageBrief="Look if somebody is offering it nearby"
                       advantageDescription="Take a look at what other users are offering in your neighborhood, or in the city you are going on a trip."/>
            <Step title="Can't find it?"
                       advantageBrief="Just ask for it!"
                       advantageDescription="Create a new request, stating what do you need and when. Other users will be very happy to help you." />
            <Step title="Meet with your neighbour"
                       advantageBrief="Meet and receive the item you need."
                       advantageDescription="Don't forget to say thank you! A coffee can be a great way to do it."/>
            <Step title="Return your item"
                       advantageBrief="After using it, just return it to the owner."
                       advantageDescription="Write a review, which will help both getting items easier in the future."/>

        </div>
    </div>
);