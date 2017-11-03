import React from 'react';
import { Link } from 'react-router-dom';
import {
    ButtonColor
} from "../../containers/Buttons/Buttons";

export const RowWithButton = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="ui-block">
                        <div className="ui-block-title">
                            <div className="h5 title bold">{props.title}</div>
                            <div className="align-right">
                                <ButtonColor color={props.color} className="btn btn-md">
                                    <Link to={props.link} className="h5 bold">{props.buttonText}</Link>
                                </ButtonColor>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};