import React from 'react';
import { connect } from 'react-redux';

import { toggleModal } from '../../redux/actions/uiActions';

import { Backdrop, Wrapper, ModalFormWrapper, ModalFormElementWrapper, ModalButton, ModalFormInput, ModalFormLabel, ModalTitle} from './styles';

const mapStateToProps = (state) => {
    return {
        display: state.ui.modals.login.display,
    }
};

class LoginModal extends React.Component {
    handleToggleModal() {
        return this.props.dispatch(toggleModal('login'));
    }

    handleKeyPress(event) {
        if (event.key === "Escape") {
            this.handleToggleLoginModal();
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
                            <h6>Login</h6>
                            <button type="button" className="close" onClick={this.handleToggleModal.bind(this)} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </ModalTitle>
                        <ModalFormWrapper>
                            <form action="/">
                                <div className="row">
                                    <ModalFormElementWrapper>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <ModalFormLabel>Username</ModalFormLabel>
                                            <ModalFormInput className="form-control" type="text"/>
                                        </div>
                                    </ModalFormElementWrapper>
                                    <ModalFormElementWrapper>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <ModalFormLabel>Password</ModalFormLabel>
                                            <ModalFormInput className="form-control" type="password"/>
                                        </div>
                                    </ModalFormElementWrapper>
                                    <ModalButton className="btn btn-primary btn-lg full-width">Login</ModalButton>
                                </div>
                            </form>
                        </ModalFormWrapper>
                    </Wrapper>
                </Backdrop>
            )
        }
    }
}

LoginModal = connect(mapStateToProps)(LoginModal);

export default LoginModal;