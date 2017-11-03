export const typeDefs = `

type User {
	id: ID!
	username: String!
	email: String!
	password: String!
	status: String
	firstName: String!
	lastName: String!
	dateOfBirth: String
	countryOfBirth: String
	countryOfResidence: String
	cityOfResidence: String
	postalCode: String
	address: String
	apartment: String
	phoneCode: String
	phoneNumber: String
	gender: String
	picturePath: String
	description: String
	#// Preferences
	allowsToReceiveRequests: Boolean
	radiusOfSearch: Int
	#// Social
	facebook: String
	instagram: String
	linkedIn: String
	twitter: String
	#// Certifications
	validPhone: Boolean
	validEmail: Boolean
	facebookFriends: Int
	#// Items
	currentPublishedById: [Int]
	currentRequestedById: [Int]
	#// Permissions
	isAdmin: Boolean
	isSuperAdmin: Boolean
	#// History
	registered: String
	lastConnection: String
	lastLocation: [Float]
}


type Query {
	users: [User]
}
`;