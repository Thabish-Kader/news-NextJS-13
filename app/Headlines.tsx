import React from "react";
import { Article } from "./Article";

type Props = {
	news: NewsResponse;
};

export const Headlines = ({ news }: Props) => {
	return (
		<main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10 gap-10">
			{news.data.map((article, i) => (
				<Article key={i} article={article} />
			))}
		</main>
	);
};
