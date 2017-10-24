import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { toggleRegisterModal } from '../../redux/actions/uiActions';

const mapStateToProps = (state) => {
    return {
        display: state.ui.modals.register.display,
    }
};

class UserMenuNoUser extends React.Component {
    handleToggleRegisterModal() {
        return this.props.dispatch(toggleRegisterModal());
    }

    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li><a onClick={this.handleToggleRegisterModal.bind(this)}><span className="glyphicon glyphicon-user" />Register</a></li>
                <li><a href="/"><span className="glyphicon glyphicon-log-in" />Login</a></li>
            </ul>
        )
    }
}

UserMenuNoUser = connect(mapStateToProps)(UserMenuNoUser);

export default UserMenuNoUser;
