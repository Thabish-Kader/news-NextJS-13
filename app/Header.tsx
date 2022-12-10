import { HiBars3 } from "react-icons/hi2";
import { CategoriesLink } from "./CategoriesLink";
import { DarkModeBtn } from "./DarkModeBtn";
import { SearchNews } from "./SearchNews";

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

				<div className="flex items-center space-x-2">
					<DarkModeBtn />
					<button className="bg-zinc-900 dark:bg-black p-2 lg:text-xl lg:p-4 rounded-full text-white">
						Subscribe
					</button>
				</div>
			</div>
			{/* links */}
			<CategoriesLink />
			{/* Search component */}
			<SearchNews />
		</header>
	);
};
