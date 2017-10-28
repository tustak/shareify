
export default {
    items: {
        list: [],
    },
    ui: {
        modals: {
            register: {
                display: false,
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            },
            login: {
                display: false,
                username: '',
                password: '',
                message: '',
            }
        }
    },
    session: {
        auth: !!window.sessionStorage.jwt,
        user: null,
    },
}