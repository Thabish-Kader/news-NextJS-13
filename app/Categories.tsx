import Link from "next/link";
import React from "react";

type Props = {
	category: string;
	isActive: boolean;
};

export const Categories = ({ category, isActive }: Props) => {
	return (
		<div
			className="hover:underline decoration-red-500 text-center decoration-2 active:underline
         underline-offset-8 rounded-full p-4 cursor-pointer hover:font-bold capitalize hover:scale-110 transition-transform duration-200
        ease-out"
		>
			<Link
				className={`${
					isActive &&
					"underline decoration-red-500 underline-offset-8 font-bold"
				}`}
				href={`/news/${category}`}
			>
				{category}
			</Link>
		</div>
	);
};
