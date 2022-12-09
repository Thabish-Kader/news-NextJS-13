import { HiBars3 } from "react-icons/hi2";
import { Categories } from "./Categories";
import { categories } from "../newsCategories";
export const Header = () => {
	return (
		<header>
			{/* top section */}
			<div className="flex justify-between p-4 lg:p-8 items-center">
				<HiBars3 className="h-10 w-10 lg:h-12 lg:w-12" />

				<h1 className="text-4xl lg:text-6xl">
					My{" "}
					<span className="underline decoration-red-500">Times</span>{" "}
					News
				</h1>

				<button className="bg-zinc-900 p-2 lg:text-xl lg:p-4 rounded-full text-white">
					Subscribe
				</button>
			</div>
			{/* links */}
			<div className="max-w-6xl mx-auto flex items-center justify-between">
				{categories.map((category, i) => (
					<Categories key={i} category={category} />
				))}
			</div>
		</header>
	);
};
