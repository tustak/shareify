import React from 'react';
import { connect } from 'react-redux';

//import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import moment from 'moment';

import {
    ButtonOrange,
    ButtonGray,
} from '../../containers/Buttons/Buttons'

import {
    loadPersonalSettings,
    savePersonalSettings,
    setDateBirth,
    setFormProperty,
    setSavedMessage
} from '../../redux/actions/uiActions'

import {
    FormGroup,
    Label,
    InputFormControl,
    TextAreaFormControl
} from "../../containers/Inputs/Inputs";


/*<DatePicker className="form-control"
                                    selected={moment(dateOfBirth)}
                                    onChange={this.handleChangeBirth.bind(this)}
                                    customInput={<InputFormControl />}
                        />*/

const mapStateToProps = (state) => {
    return {
        personal: state.ui.forms.personal,
        saveMessage: state.ui.forms.saveMessage,
        saveDisabled: state.ui.forms.saveDisabled
    }
};

class PersonalSettings extends React.Component {

    handleChangeBirth(date) {
        date = date.format("YYYY-MM-DD");
        this.props.dispatch(setDateBirth(date));
    }

    handleChange(event) {
        event.preventDefault();
        this.props.dispatch(setFormProperty("personal", event.target.name, event.target.value))
    }

    restoreDefaults() {
        this.props.dispatch(loadPersonalSettings())
    }

    handleSave() {
        savePersonalSettings(this.props.personal)
            .then(
                response => {
                    if (window.sessionStorage.jwt) {
                        window.sessionStorage.jwt = response.data;
                    }
                    else if (window.localStorage.jwt) {
                        window.localStorage.jwt = response.data;
                    }
                }
            ).then(
                this.props.dispatch(setSavedMessage("personal", "Saved"))
            )
    }

    componentDidMount() {
        this.props.dispatch(loadPersonalSettings())
            .then(
                this.props.dispatch(
                    setDateBirth(
                        this.props.personal.dateOfBirth
                    )
                )
            );
    }

    render() {
        const {personal} = this.props;

        return (
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>First name</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="firstName" className="form-control" type="text" value={personal.firstName} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label>Username</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="username" className="form-control" type="text" value={personal.username} disabled />
                    </FormGroup>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>Last name</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="lastName" className="form-control" type="text" value={personal.lastName} disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="email" className="form-control" type="text" value={personal.email} />
                    </FormGroup>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>Date of birth (DD-MM-YYYY)</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="dateOfBirth" className="form-control" type="text" value={personal.dateOfBirth} />
                    </FormGroup>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>Country of birth</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="countryOfBirth" className="form-control" type="text" value={personal.countryOfBirth} />
                    </FormGroup>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>Phone code</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="phoneCode" className="form-control" type="text" value={personal.phoneCode} />
                    </FormGroup>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>Phone number</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="phoneNumber" className="form-control" type="text" value={personal.phoneNumber} />
                    </FormGroup>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>Country of residence</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="countryOfResidence" className="form-control" type="text" value={personal.countryOfResidence} />
                    </FormGroup>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>City of residence</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="cityOfResidence" className="form-control" type="text" value={personal.cityOfResidence} />
                    </FormGroup>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>Address</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="address" className="form-control" type="text" value={personal.address} />
                    </FormGroup>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>Apartment</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="apartment" className="form-control" type="text" value={personal.apartment} />
                    </FormGroup>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>Postal code</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="postalCode" className="form-control" type="text" value={personal.postalCode} />
                    </FormGroup>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>Gender</Label>
                        <InputFormControl onChange={this.handleChange.bind(this)} name="gender" className="form-control" type="text" value={personal.gender} />
                    </FormGroup>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <FormGroup>
                        <Label>Description</Label>
                        <TextAreaFormControl onChange={this.handleChange.bind(this)} name="description" className="form-control" type="text" value={personal.description} />
                    </FormGroup>
                </div>





                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <ButtonGray onClick={this.restoreDefaults.bind(this)} className="btn btn-primary btn-lg full-width">Restore defaults</ButtonGray>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <ButtonOrange onClick={this.handleSave.bind(this)} className="btn btn-primary btn-lg full-width" disabled={this.props.saveDisabled}>{this.props.saveMessage}</ButtonOrange>
                </div>
            </div>
        )
    }
}

PersonalSettings = connect(mapStateToProps)(PersonalSettings);

export default PersonalSettings;