import React from "react";
import { frontendBaseUrl as frontend_base_URL } from "@/constants/variables";
import Seo from "@/layouts/Seo";
import { Button, Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/pages/Error.module.scss";
import Image from "next/image";

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

const Error: React.FC<ErrorPageProps> = ({
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
				canonical={frontend_base_URL}
				og={{
					url: `${frontend_base_URL}/404`,
					title: title,
					description: description,
					images: [
						{
							url: image,
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
						layout="responsive"
					/>
				</div>
			</main>
		</>
	);
};

export default Error;
