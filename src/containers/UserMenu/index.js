import React from 'react';
import { connect } from 'react-redux';

import UserMenuNoUser from "../UserMenuNoUser/index";
import UserMenuUser from "../UserMenuUser/index";

const mapStateToProps = (state) => (
    {
        user: state.user,
    }
);

class UserMenu extends React.Component {
    render() {
        const { user } = this.props.user;
        if (user) {
            return <UserMenuUser/>
        }
        else {
            return <UserMenuNoUser/>
        }
    }
}

UserMenu = connect(mapStateToProps)(UserMenu);

export default UserMenu;