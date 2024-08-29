import { frontendBaseUrl } from "@/constants";
import { Seo } from "@/layouts";
import { Button, Typography } from "@/library";
import styles from "@/styles/pages/Error.module.scss";
import { stylesConfig } from "@/utils";
import Image from "next/image";
import React from "react";

interface ErrorPageProps {
	title: string;
	description: string;
	image: string;
	button: {
		label: string;
		action: any;
	};
}

const classes = stylesConfig(styles, "error");

export const Error: React.FC<ErrorPageProps> = ({
	title,
	description,
	image,
	button,
}) => {
	return (
		<>
			<Seo
				title={title}
				description={description}
				canonical={frontendBaseUrl}
				og={{
					url: `${frontendBaseUrl}/404`,
					title: title,
					description: description,
					images: [
						{
							url: frontendBaseUrl + "/images/lost.png",
							width: 800,
							height: 600,
							alt: "NextJS Boilerplate",
							type: "image/png",
						},
					],
				}}
			/>
			<main className={classes("")}>
				<div className={classes("-content")}>
					<Typography
						as="h1"
						size="head-3"
						weight="bold"
						className={classes("-title")}
					>
						{title}
					</Typography>
					<Button variant="filled" onClick={() => button.action()}>
						{button.label}
					</Button>
				</div>
				<div className={classes("-image")}>
					<Image
						src={image}
						alt="NextJS Boilerplate"
						width={800}
						height={600}
					/>
				</div>
			</main>
		</>
	);
};
