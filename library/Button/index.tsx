import { stylesConfig } from "@/utils";
import React, { forwardRef } from "react";
import styles from "./styles.module.scss";
import { IButtonProps } from "./types";

const classNames = stylesConfig(styles);

const BUTON_SIZES: { [key: string]: string } = {
	small: "btn--size--small",
	medium: "btn--size--medium",
	large: "btn--size--large",
};

const BUTTON_VARIANTS: { [key: string]: string } = {
	filled: "btn--variant--filled",
	outlined: "btn--variant--outlined",
	text: "btn--variant--text",
};

const Button: React.ForwardRefRenderFunction<
	HTMLButtonElement,
	IButtonProps
> = (
	{
		children,
		className,
		variant = "filled",
		size = "medium",
		loading = false,
		icon,
		iconPosition = "left",
		...props
	},
	ref
) => {
	return (
		<button
			className={[
				classNames(
					"btn",
					BUTON_SIZES[size],
					BUTTON_VARIANTS[variant],
					{ "btn--loading": loading },
					{ "btn--disabled": props.disabled || loading }
				),
				className,
			].join(" ")}
			disabled={props.disabled || loading}
			ref={ref}
			{...props}
		>
			{loading ? (
				<div className={classNames("btn__loader")}></div>
			) : (
				<>
					{icon && iconPosition === "left" ? (
						<div
							className={classNames(
								"btn__icon",
								"btn__icon--left"
							)}
						>
							{icon}
						</div>
					) : null}
					{children}
					{icon && iconPosition === "right" ? (
						<div
							className={classNames(
								"btn__icon",
								"btn__icon--right"
							)}
						>
							{icon}
						</div>
					) : null}
				</>
			)}
		</button>
	);
};

export default forwardRef<HTMLButtonElement, IButtonProps>(Button);
