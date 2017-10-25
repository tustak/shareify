import React from 'react';
import styled from 'styled-components';

import UserMenu from '../UserMenu';

const Wrapper = styled.div`
    background-color: #3f4257;
    color: white;
    width:100%;
    height: 60px;
    padding: 0 10px;
    position: fixed;
    margin: 0px;
    z-index: 1;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 70px;
    padding-left: 70px;
    * > li > a {
        color: white;
        :hover {
            background-color: #3f4257;
        }
    }    
`;

const HeaderTitle = styled.div`
    font-family: 'Ubuntu Condensed', sans-serif;
    margin: 0px;
    text-decoration: none;
    color: white;
    font-size: 25px;
    padding-top: 3px;
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
            <div>
                <Wrapper>
                    <div className="container-fluid">
                        <HeaderTitle className="navbar-header">
                            <a href="/">Header</a>
                        </HeaderTitle>
                        <UserMenu />
                    </div>
                </Wrapper>
            </div>
        )
    }
}

export default Header;