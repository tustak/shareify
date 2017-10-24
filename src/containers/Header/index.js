import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import UserMenu from '../UserMenu';
import Modal from '../Modals';
import ModalForm from '../Modals';
import ModalFormElement from '../Modals';

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
`

const mapStateToProps = (state) => {
    return {
        ui: state.ui,
    }
}

class Header extends React.Component {
    render() {
        return(
            <div>
                <Modal title="Register" show={this.props.ui.modals.register.display}>
                    <ModalForm>
                        <ModalFormElement size="small" label="First name" type="text" />
                        <ModalFormElement size="small" label="Last name" type="text"/>
                        <ModalFormElement size="large" label="Email" type="email" />
                        <ModalFormElement size="large" label="Password" type="password" />
                        <ModalFormElement size="large" label="Repeat password" type="password" />
                    </ModalForm>
                </Modal>
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

Header = connect(mapStateToProps)(Header);

export default Header;