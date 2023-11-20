import React from "react";
import { useRouter } from "next/router";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/Home.module.scss";
import { Button, Typography } from "@/library";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => {
	const router = useRouter();
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
			<Button onClick={() => router.push("/500")} variant="filled">
				Check out Error Boundary
			</Button>
		</main>
	);
};

export default HomePage;
