import { ArticlesResponse } from './articles.response';

export class SingleArticleResponse {
	article: ArticlesResponse

	constructor(article: ArticlesResponse) {
		this.article = article
	}
}