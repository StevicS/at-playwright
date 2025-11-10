// author.response.ts
export class AuthorResponse {
	username: string
	bio: string | null
	image: string
	following: boolean

	constructor(
		username: string,
		bio: string | null,
		image: string,
		following: boolean
	) {
		this.username = username
		this.bio = bio
		this.image = image
		this.following = following
	}
}