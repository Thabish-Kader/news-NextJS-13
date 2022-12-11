import React from "react";
import newsJson from "../../newsData.json";
import { fetchNews } from "../../utils/fetchNews";
import { Headlines } from "../Headlines";

type Props = {
	searchParams: { term: string };
};

const SearchArticle = async ({ searchParams }: Props) => {
	const news: NewsResponse =
		newsJson || (await fetchNews("general", true, searchParams.term));
	// console.log(news);
	return (
		<div>
			<h1 className="title">Results for {searchParams.term}</h1>

			<Headlines news={news} />
		</div>
	);
};

export default SearchArticle;
