import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "@/styles/globals.scss";
import { Wrapper } from "@/layouts";
import store from "@/context";

export default function App({ Component, pageProps }: AppProps) {
	if (typeof window !== "undefined") AOS.init();
	return (
		<Provider store={store}>
			<Wrapper>
				<Component {...pageProps} />
			</Wrapper>
		</Provider>
	);
}
