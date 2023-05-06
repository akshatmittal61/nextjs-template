import { useState } from "react";

const useContextData = () => {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	return {
		theme,
		setTheme,
	};
};

export default useContextData;
