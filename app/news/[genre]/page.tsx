import newsJson from "../../../newsData.json";
import React from "react";
import { Headlines } from "../../Headlines";
import { fetchNews } from "../../../utils/fetchNews";

type Props = {
	params: { genre: string };
};

const genrePage = async ({ params }: Props) => {
	const news: NewsResponse =
		newsJson || (await fetchNews(params.genre, true));

	return (
		<div>
			<h1 className="title">{params.genre}</h1>

			<Headlines news={news} />
		</div>
	);
};

export default genrePage;
