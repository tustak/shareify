import React from 'react';
import { connect } from 'react-redux';

import {
    saveNewOffer,
    setFormProperty,
    setSavedMessage
} from "../../redux/actions/uiActions";

import {
    FormGroup,
    Label,
    InputFormControl,
    TextAreaFormControl
} from "../../containers/Inputs/Inputs";

const mapStateToProps = (state) => {
    return {
        newOffer: state.ui.forms.newOffer
    }
};

class NewOffer extends React.Component {

    handleChange(event) {
        event.preventDefault();
        this.props.dispatch(setFormProperty("newOffer", event.target.name, event.target.value));
    }

    handleSave() {
        saveNewOffer(this.props.newOffer)
            .then(
                this.props.dispatch(setSavedMessage("newOffer"))
            )
    }

    render() {
        const { newOffer } = this.props;
        return (
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>What do you want to offer?</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="item" className="form-control" type="text" value={newOffer.item} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Where do you have it?</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="location" className="form-control" type="text" value={newOffer.quantity} />
                    </FormGroup>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>How many do you have?</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="quantity" className="form-control" type="text" value={newOffer.quantity} />
                    </FormGroup>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>Description</Label>
                        <TextAreaFormControl onChange={this.handleChange.bind(this)} name="description" className="form-control" type="text" value={newOffer.description} />
                    </FormGroup>
                </div>
            </div>

        )
    }
}

NewOffer = connect(mapStateToProps)(NewOffer);

export default NewOffer;