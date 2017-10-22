import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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
        let userMenu;
        if (!user) {
            userMenu =  <ul className="nav navbar-nav navbar-right">
                            <li>{user.name}</li>
                        </ul>;
        }
        else {
            userMenu = <ul className="nav navbar-nav navbar-right">
                            <li><a href="/" ><span className="glyphicon glyphicon-user" />Sign Up</a></li>
                            <li><a href="/"><span className="glyphicon glyphicon-log-in" />Login</a></li>
                        </ul>;
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