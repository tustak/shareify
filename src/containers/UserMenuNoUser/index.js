import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import RegisterModal from '../Modals/RegisterModal';
import LoginModal from '../Modals/LoginModal';

import { toggleModal } from '../../redux/actions/uiActions';
import { fetchUser } from "../../redux/actions/userActions";

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

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (modal) => {
            dispatch(toggleModal(modal))
        }
    }
}

class UserMenuNoUser extends React.Component {
    handleToggleModal(modal) {
        return this.props.onClick(modal);
    }
    handleFetchUser(userId) {
        return this.props.dispatch(fetchUser(1));
    }

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

UserMenuNoUser = connect(mapStateToProps, mapDispatchToProps)(UserMenuNoUser);

export default UserMenuNoUser;
