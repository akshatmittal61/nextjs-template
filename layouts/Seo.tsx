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

export const Seo: React.FC<ISeoProps> = ({
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
			<title key="title">{title}</title>
			<meta key="description" name="description" content={description} />
			<meta key="image" name="image" content={image} />
			<meta key="author" name="author" content={author} />
			<meta key="siteName" name="site_name" content={siteName} />
			<link key="canonical" rel="canonical" href={canonical} />
			<meta key="themeColor" name="theme-color" content={themeColor} />

			{icons?.map((item, index) => {
				return (
					<React.Fragment key={`head-icon-${index}`}>
						<link
							key={`head-icon-${index}`}
							rel={item.rel}
							href={item.href}
							// sizes={item.sizes}
							type={item.type}
						/>
					</React.Fragment>
				);
			})}

			<meta key="ogTitle" property="og:title" content={og?.title} />
			<meta
				key="ogDescription"
				property="og:description"
				content={og?.description}
			/>
			{og?.images?.map((item, index) => {
				return (
					<React.Fragment key={`head-og-image-${index}`}>
						<meta
							key="ogImage"
							property="og:image"
							content={item?.url}
						/>
						<meta
							key="ogImageSecureUrl"
							property="og:image:secure_url"
							content={item?.secureUrl}
						/>
						<meta
							key="ogImageType"
							property="og:image:type"
							content={item?.type}
						/>
						<meta
							key="ogImageWidth"
							property="og:image:width"
							content={item?.width + ""}
						/>
						<meta
							key="ogImageHeight"
							property="og:image:height"
							content={item?.height + ""}
						/>
						<meta
							key="ogImageAlt"
							property="og:image:alt"
							content={item?.alt}
						/>
					</React.Fragment>
				);
			})}
			<meta key="ogUrl" property="og:url" content={og?.url} />
			<meta key="ogType" property="og:type" content={og?.type} />
			<meta
				key="ogSiteName"
				property="og:site_name"
				content={og?.siteName}
			/>

			<meta
				key="twitterCard"
				name="twitter:card"
				content={twitter?.card}
			/>
			<meta
				key="twitterSite"
				name="twitter:site"
				content={twitter?.site}
			/>
			<meta
				key="twitterCreator"
				name="twitter:creator"
				content={twitter?.author}
			/>
			<meta
				key="twitterTitle"
				name="twitter:title"
				content={twitter?.title}
			/>
			<meta
				key="twitterDescription"
				name="twitter:description"
				content={twitter?.description}
			/>
			<meta
				key="twitterImage"
				name="twitter:image"
				content={twitter?.image}
			/>
			<meta key="twitterUrl" name="twitter:url" content={twitter?.url} />
		</Head>
	);
};
