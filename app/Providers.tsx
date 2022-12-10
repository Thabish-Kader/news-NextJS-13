"use client";
import { ThemeProvider } from "next-themes";

type Props = {};

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			{children}
		</ThemeProvider>
	);
};
