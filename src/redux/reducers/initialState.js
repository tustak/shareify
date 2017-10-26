
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
    user: {
        user: null,
        auth: !!window.sessionStorage.jwt,
    }
}