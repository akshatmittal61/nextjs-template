import React from "react";
import Seo from "./Seo";
import { frontendBaseUrl } from "@/constants/variables";

const Layout: React.FC<any> = ({ children }) => {
	return (
		<>
			<Seo
				title="NextJS Boilerplate"
				description="NextJS Boilerplate with TypeScript, ESLint, Prettier, Jest, React Testing Library, SASS, and more."
				image="/images/og-image.png"
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
					image: "/images/og-image.png",
					url: frontendBaseUrl,
				}}
				og={{
					title: "NextJS Boilerplate",
					description:
						"NextJS Boilerplate with TypeScript, ESLint, Prettier, Jest, React Testing Library, SASS, and more.",
					images: [
						{
							url: "/images/og-image.png",
							secureUrl: "/images/og-image.png",
							type: "image/png",
							width: 1200,
							height: 630,
							alt: "NextJS Boilerplate",
						},
					],
					url: frontendBaseUrl,
					type: "website",
					siteName: "NextJS Boilerplate",
				}}
			/>
			{children}
		</>
	);
};

export default Layout;
