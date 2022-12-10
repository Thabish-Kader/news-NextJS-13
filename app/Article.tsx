import React from "react";

type Props = {
	article: NewsArticles;
};

export const Article = ({ article }: Props) => {
	return (
		<div>
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
		</div>
	);
};
