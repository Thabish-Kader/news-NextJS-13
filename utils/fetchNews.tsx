import { gql } from "graphql-request";

export const fetchNews = async (
	categories: string,
	isDynamic?: boolean,
	searchKeyWord?: string
) => {
	const query = gql`
		query MyQuery(
			$access_key: String!
			$categories: String!
			$keywords: String
		) {
			myQuery(
				access_key: $access_key
				countries: "us"
				categories: $categories
				keywords: $keywords
			) {
				data {
					author
					category
					country
					description
					image
					language
					published_at
					source
					title
					url
				}
			}
		}
	`;

	const response = await fetch(
		"https://guaimaro.stepzen.net/api/orderly-armadillo/__graphql",
		{
			method: "POST",
			cache: isDynamic ? "no-cache" : "default",
			next: isDynamic ? { revalidate: 0 } : { revalidate: 1000 },

			headers: {
				"Content-Type": "application/json",
				Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
			},

			body: JSON.stringify({
				query,
				variables: {
					access_key: process.env.MEDIASTAK_API_KEY,
					categories: categories,
					keywords: searchKeyWord,
				},
			}),
		}
	);
	console.log("Data retrieval succcessful for >>>>> " + categories);
	const news = await response.json();
	console.log(news.data.myQuery);
	return news.data.myQuery;
};
