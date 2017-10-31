import styled from 'styled-components';

export const FormGroup = styled.div`
    position: relative;
    margin-bottom: 20px;
`;

export const Label = styled.label`
    top: 10px;
    font-size: 11px;
    line-height: 1.07;
    position: absolute;
    pointer-event: none;
    transition: 0.3s ease all;
    left: 20px;
    color: #888da8;
    z-index: 1;
`;

export const InputFormControl = styled.input`
    padding: 20.8px 17.6px 6.4px;
    1px solid #e6ecf5
    line-height: 1.8;
    height: 54px;
    color: #515365;
    font-size: 12.25px;
`;

export const TextAreaFormControl = styled.textarea`
    padding: 20.8px 17.6px 6.4px;
    1px solid #e6ecf5
    line-height: 1.8;
    height: 108px!important;
    color: #515365;
    font-size: 12.25px;
`;

export const DateRangePicker = styled.div`

`;