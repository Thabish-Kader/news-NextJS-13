"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const SearchNews = () => {
	const [input, setInput] = useState("");
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!input) return;

		router.push(`/search?term=${input}`);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex space-x-2 items-center max-w-6xl mx-auto"
		>
			<input
				onChange={(e) => setInput(e.target.value)}
				type="text"
				placeholder="Search...."
				className="flex-1 w-full bg-slate-200 p-2 rounded-lg text-red-500 outline-none dark:bg-black"
			/>
			<button
				disabled={!input}
				className="text-red-500 bg-slate-200 dark:bg-black p-3 rounded-full disabled:text-gray-500"
			>
				Search
			</button>
		</form>
	);
};
