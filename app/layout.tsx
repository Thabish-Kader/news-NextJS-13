import "../styles/globals.css";
import { Header } from "./Header";
import { Providers } from "./Providers";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body className="bg-gray-100 dark:bg-zinc-900">
				<Providers>
					<Header />
					<div className="mx-auto max-w-6xl">{children}</div>
				</Providers>
			</body>
		</html>
	);
}
