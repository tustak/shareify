import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
    vertical-align: middle;
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
            <Wrapper>
                <ul className="nav navbar-nav navbar-right">
                    {user.data.firstName}
                </ul>
            </Wrapper>
        )
    }
}

UserMenuUser = connect(mapStateToProps)(UserMenuUser);

export default UserMenuUser;