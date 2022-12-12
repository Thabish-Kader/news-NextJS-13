import newsJson from "../../../newsData.json";
import React from "react";
import { Headlines } from "../../Headlines";
import { fetchNews } from "../../../utils/fetchNews";
import { categories } from "../../../newsCategories";

type Props = {
	params: { genre: Categories };
};

const GenrePage = async ({ params: { genre } }: Props) => {
	const news: NewsResponse = (await fetchNews(genre)) || newsJson;

	return (
		<div>
			<h1 className="title">{genre}</h1>

			<Headlines news={news} />
		</div>
	);
};

export default GenrePage;

export async function generateStaticParams() {
	return categories.map((category) => ({
		genre: category,
	}));
}
