import { createContext } from "react";

const GlobalContext = createContext({
	theme: "light" as "light" | "dark",
	setTheme: (_: "light" | "dark") => {},
});

export default GlobalContext;
