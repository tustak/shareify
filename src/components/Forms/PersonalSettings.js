import React from 'react';
import { connect } from 'react-redux';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import { loadPersonalSettings } from '../../redux/actions/uiActions'
import { setDateBirth } from '../../redux/actions/uiActions'
import { setFormPropery } from "../../redux/actions/uiActions";

import {
    FormGroup,
    Label,
    InputFormControl
} from "../../containers/Inputs/Inputs";


const mapStateToProps = (state) => {
    return {
        personal: state.ui.forms.personal
    }
};

class PersonalSettings extends React.Component {

    handleChangeBirth(date) {
        date = date.format("YYYY-MM-DD");
        this.props.dispatch(setDateBirth(date));
    }

    handleChange(event) {
        event.preventDefault();
        this.props.dispatch(setFormPropery("personal", event.target.name, event.target.value))
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

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        const {personal} = this.props;
        console.log(this.props);
        const dateOfBirth = new Date(
            personal.dateOfBirth
        ).toISOString();
        console.log(this.props.personal);
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
                        <Label>Date of birth</Label>
                        <DatePicker className="form-control"
                                    selected={moment(dateOfBirth)}
                                    onChange={this.handleChangeBirth.bind(this)}
                                    customInput={<InputFormControl />}
                        />
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
            </div>
        )
    }
}

PersonalSettings = connect(mapStateToProps)(PersonalSettings);

export default PersonalSettings;