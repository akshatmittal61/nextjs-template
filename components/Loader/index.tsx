import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

interface ILoaderProps {}

const classes = stylesConfig(styles, "loader");

const Loader: React.FC<ILoaderProps> = () => {
	return (
		<div className={classes("")}>
			<span className={classes("-bar")} />
		</div>
	);
};

export default Loader;
