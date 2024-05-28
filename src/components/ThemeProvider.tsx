import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeContextType>("dark" as any);
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useState(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			return storedTheme;
		} else {
			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light";
		}
	});

	useEffect(() => {
		const className = "dark";
		const root = window.document.documentElement;
		if (theme === "dark") {
			root.classList.add(className);
		} else {
			root.classList.remove(className);
		}
	}, [theme]);

	useEffect(() => {
		window.localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useDarkMode = () => useContext(ThemeContext);
