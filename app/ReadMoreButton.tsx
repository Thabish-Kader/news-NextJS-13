"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
	article: NewsArticles;
};

const ReadMoreButton = ({ article }: Props) => {
	// converting object to string to pass as params in router
	const querystring = Object.entries(article)
		.map(([key, value]) => `${key}=${value}`)
		.join("&");

	const path = `/article?${querystring.replace(/#/g, "[*]")}`;

	const router = useRouter();

	return (
		<button
			onClick={() => router.push(path)}
			className="font-semibold bg-red-500 rounded-full p-3 mt-2"
		>
			Read More
		</button>
	);
};

export default ReadMoreButton;
