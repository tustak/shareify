import React from 'react';
import connect from 'react-redux';
import styled from 'styled-components';

const mapStateToProps = (state) => (
    {
    user: state.user,
    }
)

const Wrapper = styled.div`
    background-color: #3f4257;
    color: white;
    width:100%;
    height: auto;
    padding: 0 10px;
    position: fixed;
    margin: 0px;
    z-index: 1;
    opacity: 0.9;
    position: fixed;
    * > li > a {
        color: white;
        :hover {
            background-color: #3f4257;
        }
    }    
`;

const HeaderTitle = styled.div`
    font-family: 'Ubuntu Condensed', sans-serif;
    padding: 0px;
    margin: 0px;
    text-decoration: none;
    color: white;
    font-size: 25px;
    padding: 5px 30px;
    > a {
        color: white;
        :hover {
            background-color: #3f4257;
            text-decoration: none;
        }
    }
`;

class Header extends React.Component {
    render() {
        return(
        <Wrapper>
            <div className="container-fluid">
                <HeaderTitle className="navbar-header">
                    <a href="/">Header</a>
                </HeaderTitle>
                <div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/" ><span className="glyphicon glyphicon-user" />Sign Up</a></li>
                        <li><a href="/"><span className="glyphicon glyphicon-log-in" />Login</a></li>
                    </ul>
                </div>
            </div>
        </Wrapper>
        )
    }
}

export default Header;