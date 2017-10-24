import React from 'react';
import styled from 'styled-components';

const ModalFormElementWrapper = styled.div`
    margin-bottom: 25px;
    position: relative;
    display: block;
`;

const ModalFormLabel = styled.label`
    top: 10px;
    font-size: 11px;
    line-height: 1.07;
    position: absolute;
    left: 20px;
    color: #888da8;
`;

const ModalFormInput = styled.input`
    padding: 20.8px 17.6px 6.4px;
    height: 60px;
    color: #515365;
    font-size: 14px;
    background-color: transparent;
`;

class ModalFormElement extends React.Component {
    render() {
        if (this.props.size === "small") {
            return (
                <ModalFormElementWrapper>
                    <div className= "col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <ModalFormLabel>{this.props.label}</ModalFormLabel>
                        <ModalFormInput className="form-control" type={this.props.type}/>
                    </div>
                </ModalFormElementWrapper>
            )
        }
        else {
            return (
                <ModalFormElementWrapper>
                    <div className= "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <ModalFormLabel>{this.props.label}</ModalFormLabel>
                        <ModalFormInput className="form-control" type={this.props.type}/>
                    </div>
                </ModalFormElementWrapper>
            )
        }
    }
}

export default ModalFormElement;