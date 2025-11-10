import { ArticlesResponse } from './articles.response';

export class ArticleListResponse {
	articles: ArticlesResponse[]
	articlesCount: number

	constructor(articles: ArticlesResponse[], articlesCount: number) {
		this.articles = articles
		this.articlesCount = articlesCount
	}
}