import { stylesConfig } from "@/utils";
import React from "react";
import styles from "./styles.module.scss";

interface ILoaderProps {}

const classes = stylesConfig(styles, "loader");

export const Loader: React.FC<ILoaderProps> = () => {
	return (
		<div className={classes("")}>
			<span className={classes("-bar")} />
		</div>
	);
};
