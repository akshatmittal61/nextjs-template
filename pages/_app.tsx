import GlobalContext from "@/context/GlobalContext";
import useContextData from "@/context/useContext";
import Layout from "@/layouts";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	const context = useContextData();
	return (
		<GlobalContext.Provider value={context}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</GlobalContext.Provider>
	);
}
