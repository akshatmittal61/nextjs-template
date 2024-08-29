import { Button, Typography } from "@/library";
import { notify } from "@/messages";
import styles from "@/styles/pages/Home.module.scss";
import { stylesConfig } from "@/utils";
import { useRouter } from "next/router";
import React from "react";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => {
	const router = useRouter();
	return (
		<main className={classes("")}>
			<Typography size="head-1" as="h1" weight="semi-bold">
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
			<Button
				onClick={() => {
					notify.success("Check success notification");
					notify.error("Check error notification");
					notify.info("Check info notification");
					notify.warn("Check warning notification");
				}}
				variant="filled"
			>
				Check notification
			</Button>
		</main>
	);
};

export default HomePage;
