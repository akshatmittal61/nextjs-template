import React from "react";
import { frontendBaseUrl as frontend_base_URL } from "@/constants/variables";
import Seo from "@/layouts/Seo";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/Error.module.scss";
import { Button, Typography } from "@/library";

interface ErrorPageProps {
	title: string;
	description: string;
	button: {
		label: string;
		action: any;
	};
}

const classes = stylesConfig(styles, "error");

const Error: React.FC<ErrorPageProps> = ({ title, description, button }) => {
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
							url: frontend_base_URL + "/images/lost.png",
							width: 800,
							height: 600,
							alt: "Ivy Pro School",
							type: "image/png",
						},
					],
				}}
			/>
			<div className={classes("")}>
				<Typography
					as="h1"
					size="head-2"
					weight="bold"
					className={classes("-title")}
				>
					{title}
				</Typography>
				<Button variant="filled" onClick={() => button.action()}>
					{button.label}
				</Button>
			</div>
		</>
	);
};

export default Error;
