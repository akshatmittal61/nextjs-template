import React from "react";
import Typography from "@/library/Typography";
import styles from "@/styles/Home.module.scss";
import { stylesConfig } from "@/utils/functions";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => {
	return (
		<main className={classes("")}>
			<Typography size="head-1" as="h1" weight="bold">
				NextJS Boilerplate
			</Typography>
			<Typography size="lg" as="p">
				NextJS Boilerplate is a starter template for NextJS with
				TypeScript, ESLint, Prettier, Husky, Commit Lint and modular
				SASS.
			</Typography>
		</main>
	);
};

export default HomePage;
