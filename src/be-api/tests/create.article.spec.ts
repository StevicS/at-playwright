
import { SingleArticleResponse } from '../clients/articles/contracts/single.article.response';
import { expect } from "playwright/test";
import { test } from "../fixtures/carry.variables.fixture";
import { ArticlesClient } from "../clients/articles/articles.clients";
import { ArticlesRequest } from "../clients/articles/contracts/articles.request";
import { ArticleListResponse } from '../clients/articles/contracts/article.list.response';


test('create article', async ({accessToken}) => {

	const articleClient = new ArticlesClient(accessToken)

	const timestamp = Date.now()

	const articleRequest = new ArticlesRequest(
		`Test Title ${timestamp}`,
		"Test Descriptions", 
		"Test Body",
		["tag1", "tag2"]
	)

	const response = await articleClient.createArticle(articleRequest)

	const readResponse: SingleArticleResponse = await response.json()

	expect(readResponse.article.slug).not.toEqual('')

	expect(readResponse.article.title).toBe(`Test Title ${timestamp}`)
	expect(readResponse.article.description).toBe("Test Descriptions")
})

test('receiving 10 articles on page laod', async ({accessToken}) => {
	const articleClient = new ArticlesClient(accessToken)

	const response = await articleClient.fetchArticlesOnHomepageLoad()
	const readResponse: ArticleListResponse = await response.json()

	expect(readResponse.articles.length).toEqual(10);
	
})