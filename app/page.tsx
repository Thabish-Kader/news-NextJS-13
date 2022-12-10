import React from "react";
import { categories } from "../newsCategories";
import { fetchNews } from "../utils/fetchNews";
import news from "../newsData.json";
import { Headlines } from "./Headlines";
export default async function HomePage() {
	const newsCategory = categories.join(",");

	// fetch data
	// const newsResponse : NewsResponse = await fetchNews(newsCategory) || newsResponseData;
	// sort the data

	// get the new data

	return (
		<div>
			<Headlines news={news} />
		</div>
	);
}
