import { useState } from "react";

const useContextData = () => {
	const [theme, setTheme] = useState<"light" | "dark">("light");
	const handleTheme = (theme: "light" | "dark") => {
		setTheme(theme);
	};

	return {
		theme,
		setTheme: handleTheme,
	};
};

export default useContextData;
