import React from 'react';
import styled from 'styled-components';

import Backdrop from './Backdrop';
import ModalTitle from './ModalTitle';
import ModalForm from './ModalForm';
import ModalFormElement from './ModalFormElement';

const Wrapper = styled.div`
  background-color: white;
  display: block!important;
  width: 476px;
  max-width: calc(100% - 40px);
  border-radius: 5px;
  border: 1px solid #e6ecf5;
  margin-bottom: 15px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  left: calc(50% - 237px);
`;

const ModalButton = styled.button`
    background-color: #ff5e3a;
    border-color: #ff5e3a;
    color: #fff;
    border-radius: 5px;
    width: 100%;
    :active {
        background-color: #ff3f14;
        border-color: #ff3f14;   
    }
    :hover {
        background-color: #ff763a;
        border-color: #ff763a;
    }
`;

class Modal extends React.Component {
    render() {
        console.log(this.props.children)
        var children = React.Children.map(
            this.props.children,
            (child) => (
                {child}
            ));
        if (!this.props.show) {
            return null;
        }
        else {
            return (
                <Backdrop>
                    <Wrapper class="modal fade show">
                        <ModalTitle title={this.props.title} />
                        { children }
                    </Wrapper>
                </Backdrop>
            )
        }
    }
}

export default Modal;