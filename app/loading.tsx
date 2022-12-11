import React from "react";
import { Jelly } from "@uiball/loaders";

const Loading = () => {
	return (
		<div className="flex h-screen w-full flex-col items-center justify-center">
			<Jelly size={80} speed={0.9} color="red" />;<h1>One moment...</h1>
		</div>
	);
};

export default Loading;
