import { stylesConfig } from "@/utils";
import React from "react";
import styles from "./styles.module.scss";
import { TypographyProps } from "./types";

const classes = stylesConfig(styles, "typography");

const Typography: React.FC<TypographyProps> = ({
	children,
	family = "poppins",
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
