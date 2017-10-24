import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import UserMenuNoUser from "../UserMenuNoUser/index";

const Wrapper = styled.div`
    background-color: red;
`;

const mapStateToProps = (state) => (
    {
        user: state.user,
    }
);

class UserMenu extends React.Component {
    render() {
        const { user } = this.props;
        console.log(user);
        let userMenu;
        if (!user) {
            userMenu =  <ul className="nav navbar-nav navbar-right">
                            <li>{user.name}</li>
                        </ul>;
        }
        else {
            return <UserMenuNoUser/>
        }
        return(
            <Wrapper>
                    {userMenu}
            </Wrapper>
        )
    }
}

UserMenu = connect(mapStateToProps)(UserMenu);

export default UserMenu;