type Categories =
	| "general"
	| "buisness"
	| "entertainment"
	| "health"
	| "science"
	| "sports"
	| "technology";

type NewsArticles = {
	author: string;
	title: string;
	description: string;
	url: string;
	source: string;
	image: null;
	category: string;
	language: string;
	country: string;
	published_at: string;
};

type Pagination = {
	limit: number;
	offset: number;
	count: number;
	total: number;
};
