import React from "react";

type Props = {
	article: NewsArticles;
};

export const Article = ({ article }: Props) => {
	return (
		<article className="flex flex-col p-4  bg-slate-100 hover:scale-110 shadow-sm hover:shadow-lg hover:bg-slate-300 transition duration-300 ease-out ">
			{/* image */}
			{article.image && (
				<div>
					<picture>
						<img
							src={article.image}
							alt={article.title}
							className="h-56 w-full object-cover rounded-t-lg shadow-md"
						/>
					</picture>
				</div>
			)}

			{/*title  */}
			<h1 className="font-bold text-xl my-2">{article.title}</h1>
			{/* description */}
			<p className="text-xs my-2">{article.description}</p>
			{/* source and date */}
			<div className="flex justify-end text-right text-xs mt-auto  text-slate-500">
				<p>{article.source}</p>
				<p>{article.published_at}</p>
			</div>
		</article>
	);
};
