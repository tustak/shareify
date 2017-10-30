
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
        },
        forms: {
            personal: {
                id: null,
                username: '',
                email: '',
                password: '',
                status: '',
                firstName: '',
                lastName: '',
                dateOfBirth: '1900-01-01',
                countryOfBirth: '',
                countryOfResidence: '',
                cityOfResidence: '',
                postalCode: null,
                address: '',
                apartment: '',
                phoneCode: '',
                phoneNumber: '',
                picturePath: '',
                description: '',
                // Preferences
                allowsToReceiveRequests: null,
                radiusOfSearch: null,
                // Social
                facebook: '',
                instagram: '',
                linkedIn: null,
                twitter: null,
                // Certifications
                validPhone: true,
                validEmail: true,
                facebookFriends: null,
                // Items
                currentPublishedById: [],
                currentRequestedById: [],
                // Permissions
                isAdmin: false,
                isSuperAdmin: false,
                // History
                registered: '1900-01-01',
                lastConnection: '1900-01-01',
                lastLocation: [],
            }
        }
    },
    session: {
        auth: !!window.sessionStorage.jwt,
        user: null,
    },
}