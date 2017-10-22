import React from 'react';
import styled from 'styled-components';

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
  position: relative;
`;

const ModalTitle = styled.div`
  padding: 23px 25px 18px;
  line-height: 1;
  border-bottom: 1px solid #e6ecf5;
  border-top: 1px solid #e6ecf5;
  display: table;
  width: 100%;
  position: relative;
  > h6 {
    color: #515365;
    margin-bottom: 0;
    display: table-cell;
    vertical-align: middle;
    font-size: 14px;
    font-weight: bold;
  }
`;

const ModalFormWrapper = styled.div`
    padding: 24px 23px 23px;
`;

const ModalFormElement = styled.div`
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
    line-height: 1;
    color: #515365;
    font-size: 14px;
    background-color: transparent;
    
`;

class Modal extends React.Component {
    render() {
        return (
            <Wrapper class="modal fade show">
                <div>
                    <ModalTitle>
                        <h6>Title</h6>
                    </ModalTitle>
                    <ModalFormWrapper>
                        <form action="/">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <ModalFormElement>
                                        <ModalFormLabel>First Name</ModalFormLabel>
                                        <ModalFormInput className="form-control" type="text"/>
                                    </ModalFormElement>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <ModalFormElement>
                                        <ModalFormLabel>First Name</ModalFormLabel>
                                        <ModalFormInput className="form-control" type="text"/>
                                    </ModalFormElement>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <ModalFormElement>
                                        <ModalFormLabel>Email</ModalFormLabel>
                                        <ModalFormInput className="form-control" type="email"/>
                                    </ModalFormElement>
                                </div>
                            </div>
                        </form>
                    </ModalFormWrapper>
                </div>

            </Wrapper>
        )
    }
}

export default Modal;