import { AuthorResponse } from './author.response'

export class ArticlesResponse {
	slug: string
	title: string
	description: string
	body: string
	tagList: string[]
	createdAt: string
	updatedAt: string
	favorited: boolean
	favoritesCount: number
	author: AuthorResponse

	constructor(
		slug: string,
		title: string,
		description: string,
		body: string,
		tagList: string[],
		createdAt: string,
		updatedAt: string,
		favorited: boolean,
		favoritesCount: number,
		author: AuthorResponse
	) {
		this.slug = slug
		this.title = title
		this.description = description
		this.body = body
		this.tagList = tagList
		this.createdAt = createdAt
		this.updatedAt = updatedAt
		this.favorited = favorited
		this.favoritesCount = favoritesCount
		this.author = author
	}
}