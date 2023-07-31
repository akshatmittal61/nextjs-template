import React from "react";
import Typography from "@/library/Typography";
import styles from "@/styles/Home.module.scss";
import { stylesConfig } from "@/utils/functions";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => {
	return (
		<main className={classes("")}>
			<Typography type="heading" variant="display">
				NextJS Boilerplate
			</Typography>
			<Typography type="body" variant="medium">
				NextJS Boilerplate is a starter template for NextJS with
				TypeScript, ESLint, Prettier, Husky, Commit Lint and modular
				SASS.
			</Typography>
		</main>
	);
};

export default HomePage;
