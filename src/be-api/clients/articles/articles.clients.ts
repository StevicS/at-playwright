import { APIRequestContext, request, APIResponse } from "@playwright/test"
import { ArticlesRequest } from "./contracts/articles.request"


export class ArticlesClient {
	private accessToken: string

	constructor(accessToken: string) {
		this.accessToken = accessToken
	}

	public async createArticle(data: ArticlesRequest): Promise<APIResponse> {
		
		const apiContext: APIRequestContext = await request.newContext()

		return await apiContext.post(
			`${process.env.API}/api/articles`,
			{
				headers: {
					authorization: `Token ${this.accessToken}`
				},
				data: {
					article: data
				}
			}
		)
	}

	public async fetchArticlesOnHomepageLoad(): Promise<APIResponse> {
		const apiContext: APIRequestContext = await request.newContext()

		return await apiContext.get(`${process.env.API}/api/articles?limit=10&offset=0`, {
			headers: {
					authorization: `Token ${this.accessToken}`
				},
		})
	}
}