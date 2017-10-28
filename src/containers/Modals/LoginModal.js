import React from 'react';
import { connect } from 'react-redux';

import { toggleModal } from '../../redux/actions/uiActions';

import { loginUser } from '../../redux/actions/sessionActions';
import { authenticateUser } from '../../redux/actions/sessionActions';


import { Backdrop,
    Wrapper,
    ModalFormWrapper,
    ModalFormElementWrapper,
    ModalButton,
    ModalFormInput,
    ModalFormLabel,
    ModalTitle,
    ToggleButton
} from './styles';

import ErrorLabel from '../ErrorLabel/ErrorLabel';

const mapStateToProps = (state) => {
    return {
        display: state.ui.modals.login.display,
    }
};

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                username: '',
                password: '',
            },
            error_message: '',
        }
    }

    onChange(event) {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({credentials: credentials});
    }

    handleToggleModal() {
        return this.props.dispatch(toggleModal('login'));
    }

    handleKeyPress(event) {
        if (event.key === "Escape") {
            this.handleToggleModal();
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        Promise.resolve(
            loginUser(this.state.credentials)
        ).then(
            response => {
                window.sessionStorage.setItem('jwt', response.data);
                this.handleToggleModal();
                this.props.dispatch(authenticateUser());
            }
        ).catch(
            err => {
                if (err.response) {
                    console.log(err.response)
                }
                else {
                    console.log(JSON.stringify(err))
                }
                this.setState(
                    {
                        'error_message': 'Either the server is down or the credentials are wrong.'
                    }
                )
            }
        )
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
                                            <ModalFormInput name="username" onChange={this.onChange.bind(this)} className="form-control" type="text"/>
                                        </div>
                                    </ModalFormElementWrapper>
                                    <ModalFormElementWrapper>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <ModalFormLabel>Password</ModalFormLabel>
                                            <ModalFormInput name="password" onChange={this.onChange.bind(this)} className="form-control" type="password"/>
                                        </div>
                                    </ModalFormElementWrapper>
                                    <ModalFormElementWrapper>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <ToggleButton />
                                        </div>
                                    </ModalFormElementWrapper>

                                </div>
                                {this.state.error_message ?
                                    <ErrorLabel error_message={this.state.error_message} />
                                    :
                                    ''}
                                <ModalButton onClick={this.handleSubmit.bind(this)} className="btn btn-primary btn-lg full-width">Login</ModalButton>
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