import React from "react";
import { categories } from "../newsCategories";
import { fetchNews } from "../utils/fetchNews";
import newsJson from "../newsData.json";
import { Headlines } from "./Headlines";
export default async function HomePage() {
	const newsCategory = categories.join(",");

	// fetch data
	const news: NewsResponse = newsJson || (await fetchNews(newsCategory));

	return (
		<div>
			<Headlines news={news} />
		</div>
	);
}
