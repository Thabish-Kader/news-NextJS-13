import { HiBars3 } from "react-icons/hi2";

export const Header = () => {
	return (
		<header>
			{/* top section */}
			<div className="flex justify-between p-4 lg:p-8 items-center">
				<HiBars3 className="h-10 w-10 lg:h-12 lg:w-12" />

				<h1 className="text-4xl lg:text-6xl">Live News</h1>

				<button className="bg-zinc-900 p-2 lg:text-xl lg:p-4 rounded-full text-white">
					Subscribe
				</button>
			</div>
			{/* links */}
			<div></div>
		</header>
	);
};
