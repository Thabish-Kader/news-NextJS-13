import { notFound } from "next/navigation";

type Props = {
	searchParams?: NewsArticles;
};

const ArticlePage = ({ searchParams: article }: Props) => {
	// When users go to path without params in url
	if ((article && Object.entries(article).length === 0) || !article)
		return notFound();

	return (
		<article className="mt-2">
			<div className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
				{article.image && (
					<picture className="mx-auto">
						<img src={article.image} alt={article.title} />
					</picture>
				)}
				<div className="flex flex-col space-y-2 p-4">
					<h1 className="text-4xl">{article.title}</h1>
					<div className="flex divide-x-2 ">
						<p className="pr-2">{article.author}</p>
						<p className="px-2">{article.source}</p>
						<p className="px-2">{article.published_at}</p>
					</div>
					<p>{article.description}</p>
				</div>
			</div>
		</article>
	);
};

export default ArticlePage;
