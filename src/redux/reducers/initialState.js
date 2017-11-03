
export default {
    items: {
        list: [],
    },
    ui: {
        backdrop: false,
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
            saveMessage: 'Save changes',
            saveDisabled: true,
            personal: {
                id: undefined,
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
                postalCode: '',
                address: '',
                apartment: '',
                phoneCode: '',
                phoneNumber: '',
                gender: '',
                picturePath: '',
                description: '',
                // Preferences
                allowsToReceiveRequests: undefined,
                radiusOfSearch: undefined,
                // Social
                facebook: '',
                instagram: '',
                linkedIn: undefined,
                twitter: undefined,
                // Certifications
                validPhone: undefined,
                validEmail: undefined,
                facebookFriends: undefined,
                // Items
                currentPublishedById: [],
                currentRequestedById: [],
                // Permissions
                isAdmin: undefined,
                isSuperAdmin: undefined,
                // History
                registered: '1900-01-01',
                lastConnection: '1900-01-01',
                lastLocation: [],
            },
            newOffer: {
                id: undefined,
                item: '',
                description: '',
                location: '',
                pickupLocation: '',
                picturePath: '',
                quantity: 1,
                saveMessage: 'Offer item',
                saveDisabled: true,
            }
        }
    },
    session: {
        auth: !!window.sessionStorage.jwt,
        user: null,
    },
}