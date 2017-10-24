import React from 'react';
import { connect } from 'react-redux';

import { toggleRegisterModal } from '../../redux/actions/uiActions';

import { Backdrop, Wrapper, ModalFormWrapper, ModalFormElementWrapper, ModalButton, ModalFormInput, ModalFormLabel, ModalTitle} from './styles';

const mapStateToProps = (state) => {
    return {
        display: state.ui.modals.register.display,
    }
};

class RegisterModal extends React.Component {
    handleToggleRegisterModal() {
        return this.props.dispatch(toggleRegisterModal());
    }

    handleKeyPress(event) {
        if (event.key === "Escape") {
            this.handleToggleRegisterModal();
        }
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        else {
            return (
                <Backdrop onKeyDown={this.handleKeyPress.bind(this)}>
                    <Wrapper class="modal fade show">
                        <ModalTitle>
                            <h6>Register</h6>
                            <button type="button" className="close" onClick={this.handleToggleRegisterModal.bind(this)} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </ModalTitle>
                        <ModalFormWrapper>
                            <form action="/">
                                <div className="row">
                                    <ModalFormElementWrapper>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <ModalFormLabel>First Name</ModalFormLabel>
                                            <ModalFormInput id="firstName" className="form-control" type="text"/>
                                        </div>
                                    </ModalFormElementWrapper>

                                    <ModalFormElementWrapper>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <ModalFormLabel>Last Name</ModalFormLabel>
                                            <ModalFormInput className="form-control" type="text"/>
                                        </div>
                                    </ModalFormElementWrapper>

                                    <ModalFormElementWrapper>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <ModalFormLabel>Email</ModalFormLabel>
                                            <ModalFormInput className="form-control" type="email"/>
                                        </div>
                                    </ModalFormElementWrapper>

                                    <ModalFormElementWrapper>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <ModalFormLabel>Password</ModalFormLabel>
                                            <ModalFormInput className="form-control" type="password"/>
                                        </div>
                                    </ModalFormElementWrapper>

                                    <ModalFormElementWrapper>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <ModalFormLabel>Repeat password</ModalFormLabel>
                                            <ModalFormInput className="form-control" type="password"/>
                                        </div>
                                    </ModalFormElementWrapper>
                                </div>
                                <ModalButton className="btn btn-primary btn-lg full-width">Register</ModalButton>
                            </form>
                        </ModalFormWrapper>
                    </Wrapper>
                </Backdrop>
            )
        }
    }
}

RegisterModal = connect(mapStateToProps)(RegisterModal);

export default RegisterModal;