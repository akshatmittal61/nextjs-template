import { stylesConfig } from "@/utils";
import React from "react";
import Avatar from "./single";
import styles from "./styles.module.scss";
import { AvatarStackProps } from "./types";

const classes = stylesConfig(styles, "avatars");

const Avatars: React.FC<AvatarStackProps> = ({
	children,
	stack = true,
	...props
}) => {
	return (
		<div
			className={classes("")}
			title={children.map((c) => c.alt).join(", ")}
		>
			{/* if there are more than 4, show only the first 4 and one more cell showing the count */}
			{(children.length > 4
				? [children[0], children[1], children[2], children[3]]
				: children
			).map((child, index) => (
				<Avatar
					key={`avatars-${index}`}
					src={child.src}
					alt={child.alt}
					{...props}
					style={{
						marginLeft: stack
							? index === 0
								? 0
								: -(props.size || 50) / 3
							: index === 0
								? 0
								: 8,
						...props.style,
					}}
				/>
			))}
			{children.length > 4 ? (
				<Avatar
					src=""
					alt={`+${children.length - 4}`}
					size={props.size}
					style={{
						backgroundColor: "var(--theme-green)",
						color: "var(--theme-white)",
						marginLeft: stack ? -(props.size || 50) / 3 : 8,
						...props.style,
					}}
				/>
			) : null}
		</div>
	);
};

export default Avatars;
