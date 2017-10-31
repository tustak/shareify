import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/sessionActions';

const DropdownWrapper = styled.div`
  background-color: #fff;
  color: rgb(136, 141, 168);
  border-radius: 4px;
  width: 200px;
  position: absolute;
  cursor: default;
  right: 40px!important;
  transition: all 0.3s ease-in-out;
  display: block;
  visibility: hidden;
  opacity: 0;
  
  div:first-of-type {
    border-top: none;
  }
  
  :before {
    position: absolute;
    display: inline-block;
    content: ' ';
    top: -7px;
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    border-bottom: 7px solid #fff;
    right: 25px;
  }
  
  .block-title {
    padding: 10px 25px;
    border-bottom: 1px solid #e6ecf5;
    border-top: 1px solid #e6ecf5;
    display: table;
    position: relative;
    width: 100%;
  }
  
  .title {
    font-size: 9px;
    text-transform: uppercase;
    color: #9a9fbf;
    margin-bottom: 0;
    display: table-cell;
    vertical-align: middle;
    font-weight: 700;
    line-height: 1.3;
  }
  
  .block-body {
    padding: 15px 25px;
    margin-bottom: 0;
    > a {
        padding: 13px 0;
        font-size: 12px;
        color: #515365;
        display: block;
        font-weight: 700;
        cursor: pointer;
        :hover {
            color: #ff5e3a;
            background-color: transparent;
            text-decoration: none;        
        }
    }
  }
`;

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
};

class Dropdown extends React.Component {

    handleLogout() {
        return this.props.dispatch(logoutUser());
    }

    render() {
        return (
            <DropdownWrapper className="dropdown-menu" aria-labelledby="user-menu">
                <div className="block-title">
                    <h6 className="title">Your account</h6>
                </div>
                <div className="block-body">
                    <Link to="/user/settings">Profile settings</Link>
                    <Link to="/" onClick={this.handleLogout.bind(this)}>Logout</Link>
                </div>
                <div className="block-title">
                    <h6 className="title">About us</h6>
                </div>
                <div className="block-body">
                    <a href="/">How it works</a>
                    <a href="/">FAQ</a>
                    <a href="/">Contact us</a>
                </div>
            </DropdownWrapper>
        )
    }
};

Dropdown = connect(mapStateToProps)(Dropdown);

export default Dropdown