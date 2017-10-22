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
  position: relative;
`;

const BlockTitle = styled.div`
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



class Modal extends React.Component {
    render() {
        return (
            <Wrapper class="modal fade show">
                <div>
                    <BlockTitle>
                        <h6>Title</h6>
                    </BlockTitle>
                    <div>
                        <form action="/">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div>
                                        <label>First Name</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div>
                                        <label>First Name</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div>
                                        <label>Email</label>
                                        <input type="email"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </Wrapper>
        )
    }
}

export default Modal;