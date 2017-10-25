import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Dropdown } from './Dropdown';

const Wrapper = styled.ul`
    cursor: pointer;
    vertical-align: middle;
    :hover .dropdown-menu {
        visibility: visible;
        opacity: 1;
        margin-top: 0;
    }
`;

const NavBar = styled.ul`
    display: inline-block;
    vertical-align: middle;
`;

const Img = styled.img`
    border-radius: 50%;
    height: 40px;
    margin-right: 8px;
`;

const UserName = styled.li`
    display: inline-block;
    vertical-align: middle;
    .user-name {
        font-size: 12px;
        font-weight: 700;
        padding-top: 5px;
        padding-right: 20px;
    }
    .user-short-description {
        display: block;
        font-size: 8px;
        color: #9a9fbf;
        text-transform: uppercase;
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

class UserMenuUser extends React.Component {
    render() {
        const { user } = this.props.user;
        console.log(user.data.firstName);
        return (
            <Wrapper className="nav navbar-nav navbar-right" id="user-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <li>
                    <Img className="user-image" src={require("../../img/andresmechali.jpg")} alt={user.data.firstName}/>
                </li>
                <UserName>
                    <div className="user-name">
                        {user.data.firstName} {user.data.lastName}
                    </div>
                    <span className="user-short-description">
                        {user.data.shortDescription}
                    </span>
                </UserName>
                <Dropdown/>
            </Wrapper>
        )
    }
}

UserMenuUser = connect(mapStateToProps)(UserMenuUser);

export default UserMenuUser;