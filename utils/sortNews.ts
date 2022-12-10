export const sortNews = async (news: NewsResponse) => {
	const newsWithImage = news.data.filter((news) => news.image !== null);
	const newsWithoutImage = news.data.filter((news) => news.image === null);

	const filterdNews = {
		pagination: news.pagination,
		data: [...newsWithImage, ...newsWithoutImage],
	};
	return filterdNews;
};
