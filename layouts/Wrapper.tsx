import { Loader } from "@/components";
import { frontendBaseUrl } from "@/constants/variables";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Seo } from "./Seo";

export const Wrapper: React.FC<any> = ({ children }) => {
	const router = useRouter();
	const [showLoader, setShowLoader] = useState(false);
	useEffect(() => {
		router.events.on("routeChangeStart", () => {
			setShowLoader(true);
		});
		router.events.on("routeChangeComplete", () => {
			setShowLoader(false);
		});
		router.events.on("routeChangeError", () => {
			setShowLoader(false);
		});
	}, [router.events]);
	return (
		<>
			<Seo
				title="NextJS Boilerplate"
				description="NextJS Boilerplate with TypeScript, ESLint, Prettier, Jest, React Testing Library, SASS, and more."
				image={`${frontendBaseUrl}/og-image.png`}
				canonical={frontendBaseUrl}
				themeColor="#0C1015"
				icons={["icon", "shortcut icon", "apple-touch-icon"].map(
					(item) => {
						return {
							rel: item,
							href: "/favicon.ico",
							type: "icon/ico",
						};
					}
				)}
				twitter={{
					card: "summary_large_image",
					site: "@akshatmittal61",
					author: "@akshatmittal61",
					title: "NextJS Boilerplate",
					description:
						"NextJS Boilerplate with TypeScript, ESLint, Prettier, Jest, React Testing Library, SASS, and more.",
					image: `${frontendBaseUrl}/og-image.png`,
					url: frontendBaseUrl,
				}}
				og={{
					title: "NextJS Boilerplate",
					description:
						"NextJS Boilerplate with TypeScript, ESLint, Prettier, Jest, React Testing Library, SASS, and more.",
					images: [
						{
							url: "/images/og-image.png",
							secureUrl: `${frontendBaseUrl}/og-image.png`,
							type: "image/png",
							width: 1200,
							height: 630,
							alt: "NextJS Boilerplate",
						},
						{
							url: `${frontendBaseUrl}/favicon-192.png`,
							secureUrl: `${frontendBaseUrl}/favicon-192.png`,
							type: "image/png",
							width: 192,
							height: 192,
							alt: "NextJS Boilerplate",
						},
						{
							url: `${frontendBaseUrl}/favicon-512.png`,
							secureUrl: `${frontendBaseUrl}/favicon-512.png`,
							type: "image/png",
							width: 512,
							height: 512,
							alt: "NextJS Boilerplate",
						},
					],
					url: frontendBaseUrl,
					type: "website",
					siteName: "NextJS Boilerplate",
				}}
			/>
			{showLoader ? <Loader /> : null}
			{children}
			<Toaster position="top-center" />
		</>
	);
};
