import React, { useRef } from "react";
import { InputProps } from "./types";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "input");

const Input: React.FC<InputProps> = ({
	label,
	styles,
	style,
	className,
	...props
}) => {
	const inputRef = useRef<any>(null);

	return (
		<div className={classes("") + ` ${className}`} style={styles?.box}>
			{label ? (
				<label className={classes("__label")} style={styles?.label}>
					{label}
				</label>
			) : null}
			<div className={classes("__input-container")}>
				<input
					className={classes("__input")}
					ref={inputRef}
					style={{
						...styles?.input,
						...style,
					}}
					{...props}
				/>
			</div>
		</div>
	);
};

export default Input;
