import Link from "next/link";
import React from "react";

type Props = {
	category: string;
};

export const Categories = ({ category }: Props) => {
	return (
		<div
			className="hover:underline decoration-red-500 text-center decoration-2 active:underline
         underline-offset-8 rounded-full p-4 cursor-pointer hover:font-bold capitalize hover:scale-110 transition-transform duration-200
        ease-out"
		>
			<Link href={`search/${category}`}>{category}</Link>
		</div>
	);
};
