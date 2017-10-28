import React from 'react';
import styled from 'styled-components';

const ErrorLabelWrapper = styled.div`
    overflow: auto;
`;

const ErrorLabel = (props) => (
    <ErrorLabelWrapper className="alert alert-danger">
        <strong>Error!</strong> {props.error_message}
    </ErrorLabelWrapper>
);

export default ErrorLabel;