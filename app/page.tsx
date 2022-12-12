import React from "react";
import { categories } from "../newsCategories";
import { fetchNews } from "../utils/fetchNews";
import newsJson from "../newsData.json";
import { Headlines } from "./Headlines";

export default async function HomePage() {
	const newsCategory = categories.join(",");

	// fetch data
	const news: NewsResponse = (await fetchNews(newsCategory)) || newsJson;

	return (
		<div>
			<Headlines news={news} />
		</div>
	);
}
