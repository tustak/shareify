import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
//import FacebookLogin from 'react-facebook-login';

import RegisterModal from '../Modals/RegisterModal';
import LoginModal from '../Modals/LoginModal';

import {
    toggleModal,
    toggleBackdrop
} from '../../redux/actions/uiActions';

const Li = styled.li`
    cursor: pointer;
    * > a {
        line-height: 30px;
    }
`;

const mapStateToProps = (state) => {
    return {
        register: state.ui.modals.register,
        login: state.ui.modals.login,
    }
};

class UserMenuNoUser extends React.Component {
    handleToggleModal(modal) {
        this.props.dispatch(toggleBackdrop());
        return this.props.dispatch(toggleModal(modal));
    }

    responseFacebook = (response) => {
        console.log(response);
    };

    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <RegisterModal show={this.props.register.display} />
                <LoginModal show={this.props.login.display} />
                <Li><a onClick={this.handleToggleModal.bind(this, 'register')}><span className="glyphicon glyphicon-user" />Register</a></Li>
                <Li><a onClick ={this.handleToggleModal.bind(this, 'login')}><span className="glyphicon glyphicon-log-in" />Login</a></Li>
            </ul>
        )
    }
}

UserMenuNoUser = connect(mapStateToProps)(UserMenuNoUser);

export default UserMenuNoUser;
