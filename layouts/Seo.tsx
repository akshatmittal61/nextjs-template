import Head from "next/head";
import React from "react";

interface ISeoProps {
	title?: string;
	description?: string;
	image?: string;
	canonical?: string;
	author?: string;
	url?: string;
	type?: string;
	siteName?: string;
	themeColor?: string;
	icons?: {
		rel?: string;
		href?: string;
		sizes?: string;
		type?: string;
	}[];
	twitter?: {
		card?: string;
		site?: string;
		author?: string;
		title?: string;
		description?: string;
		image?: string;
		url?: string;
	};
	og?: {
		title?: string;
		description?: string;
		images?: {
			url?: string;
			secureUrl?: string;
			type?: string;
			width?: number;
			height?: number;
			alt?: string;
		}[];
		url?: string;
		type?: string;
		siteName?: string;
	};
}

const Seo: React.FC<ISeoProps> = ({
	title,
	description,
	author,
	canonical,
	icons,
	image,
	siteName,
	themeColor,
	twitter,
	og,
}) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="image" content={image} />
			<meta name="author" content={author} />
			<meta name="site_name" content={siteName} />
			<link rel="canonical" href={canonical} />
			<meta name="theme-color" content={themeColor} />

			{icons?.map((item, index) => {
				return (
					<React.Fragment key={index}>
						<link
							rel={item.rel}
							href={item.href}
							// sizes={item.sizes}
							type={item.type}
						/>
					</React.Fragment>
				);
			})}

			<meta property="og:title" content={og?.title} />
			<meta property="og:description" content={og?.description} />
			{og?.images?.map((item, index) => {
				return (
					<React.Fragment key={index}>
						<meta property="og:image" content={item?.url} />
						<meta
							property="og:image:secure_url"
							content={item?.secureUrl}
						/>
						<meta property="og:image:type" content={item?.type} />
						<meta
							property="og:image:width"
							content={item?.width + ""}
						/>
						<meta
							property="og:image:height"
							content={item?.height + ""}
						/>
						<meta property="og:image:alt" content={item?.alt} />
					</React.Fragment>
				);
			})}
			<meta property="og:url" content={og?.url} />
			<meta property="og:type" content={og?.type} />
			<meta property="og:site_name" content={og?.siteName} />

			<meta name="twitter:card" content={twitter?.card} />
			<meta name="twitter:site" content={twitter?.site} />
			<meta name="twitter:creator" content={twitter?.author} />
			<meta name="twitter:title" content={twitter?.title} />
			<meta name="twitter:description" content={twitter?.description} />
			<meta name="twitter:image" content={twitter?.image} />
			<meta name="twitter:url" content={twitter?.url} />
		</Head>
	);
};

export default Seo;
