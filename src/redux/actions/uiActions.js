
const TOGGLE_MODAL = 'TOGGLE_MODAL';

export function toggleModal(modal) {
    return {
        type: TOGGLE_MODAL,
        modal: modal,
    }
}