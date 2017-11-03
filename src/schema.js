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
	allowsToReceiveRequests: Boolean
	radiusOfSearch: Int
	facebook: String
	instagram: String
	linkedIn: String
	twitter: String
	validPhone: Boolean
	validEmail: Boolean
	facebookFriends: Int
	currentPublishedById: [Int]
	currentRequestedById: [Int]
	isAdmin: Boolean
	isSuperAdmin: Boolean
	registered: String
	lastConnection: String
	lastLocation: [Float]
}

type Query {
	users: [User]
}
`;