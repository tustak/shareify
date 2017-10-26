import React from 'react';
import { connect } from 'react-redux';

import { getUserData } from '../../redux/actions/userActions';

import UserMenuNoUser from "../UserMenuNoUser/index";
import UserMenuUser from "../UserMenuUser/index";

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }

};

class UserMenu extends React.Component {


    componentWillMount() {
        if (window.sessionStorage.jwt){
            this.props.dispatch(getUserData(1))
        }
    }

    render() {
        const { user } = this.props;
        if (user.user) {
            return <UserMenuUser/>
        }
        else {
            return <UserMenuNoUser/>
        }
    }
}

UserMenu = connect(mapStateToProps)(UserMenu);

export default UserMenu;