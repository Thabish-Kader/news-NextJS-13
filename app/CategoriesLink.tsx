"use client";
import React from "react";
import { Categories } from "./Categories";
import { categories } from "../newsCategories";
import { usePathname } from "next/navigation";
export const CategoriesLink = () => {
	const pathname = usePathname();

	const isActive = (path: string) => {
		return pathname?.split("/").pop() === path;
	};

	return (
		<div className="max-w-6xl mx-auto flex items-center justify-between">
			{categories.map((category, i) => (
				<Categories
					key={i}
					category={category}
					isActive={isActive(category)}
				/>
			))}
		</div>
	);
};
