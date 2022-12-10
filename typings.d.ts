type Categories =
	| "general"
	| "business"
	| "entertainment"
	| "health"
	| "science"
	| "sports"
	| "technology";

type NewsArticles = {
	author: string | null;
	title: string;
	description: string;
	url: string;
	source: string;
	image: string | null;
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

type NewsResponse = {
	data: NewsArticles[];
	pagination: Pagination;
};
