import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  const ModalTitle = styled.div\`
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
  };
`;

const ModalTitle = (props) => (
    <Wrapper>
        <h6>{props.title}</h6>
        <button type="button" className="close" onClick={props.onClose} data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </Wrapper>
);

export default ModalTitle;