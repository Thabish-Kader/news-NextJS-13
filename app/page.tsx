import React from "react";
import { categories } from "../newsCategories";
import { fetchNews } from "../utils/fetchNews";
export default async function HomePage() {
	const newsCategory = categories.join(",");
	console.log(newsCategory);
	// fetch data
	// const newsResponse = await fetchNews(newsCategory);
	// sort the data
	// console.log(newsResponse);
	// get the new data

	return <div className="text-red-500">Page</div>;
}
