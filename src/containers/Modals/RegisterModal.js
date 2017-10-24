import React from 'react';
import styled from 'styled-components';

import { Backdrop, Wrapper, ModalFormWrapper, ModalFormElementWrapper, ModalButton, ModalFormInput, ModalFormLabel} from './styles';

class RegisterModal extends React.Component {
    render() {
        return(
            <Backdrop>
                <Wrapper>
                    <ModalTitle title="Register" />

                </Wrapper>
            </Backdrop>
        )
    }
}