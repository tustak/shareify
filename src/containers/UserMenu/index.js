import React from 'react';
import { connect } from 'react-redux';

import UserMenuNoUser from '../UserMenuNoUser/index';
import UserMenuUser from '../UserMenuUser/index';

import { authenticateUser } from '../../redux/actions/sessionActions';

const mapStateToProps = (state) => {
    return {
        session: state.session,
    }
};

class UserMenu extends React.Component {
    componentWillMount() {
        this.props.dispatch(authenticateUser())
    }

    render() {
        const { user } = this.props.session;
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