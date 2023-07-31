import { TypographyProps } from "./types";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import React from "react";

const classes = stylesConfig(styles, "typography-");

const Typography: React.FC<TypographyProps> = ({
	type = "body",
	variant = "medium",
	format = "regular",
	children,
	className,
	...rest
}: TypographyProps) => {
	return (
		<span
			className={[
				classes([type, variant, format].join("-")),
				className,
			].join(" ")}
			{...rest}
		>
			{children}
		</span>
	);
};

export default Typography;
