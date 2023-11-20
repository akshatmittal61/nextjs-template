import React from "react";
import { TypographyProps } from "./types";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "typography");

const Typography: React.FC<TypographyProps> = ({
	children,
	family = "josefin-sans",
	size = "md",
	weight = "regular",
	as = "span",
	className = "",
	...rest
}) => {
	const Component = as || "span";

	return (
		<Component
			className={
				classes("", `--${family}-${size}-${weight}`) + ` ${className}`
			}
			{...rest}
		>
			{children}
		</Component>
	);
};

export default Typography;
