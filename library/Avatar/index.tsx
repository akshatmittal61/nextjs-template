import { Typography } from "@/library";
import { stylesConfig } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface IAvatarProps {
	src: string;
	alt: string;
	className?: string;
	onClick?: () => void;
	size?: "small" | "medium" | "large" | number;
}

const classes = stylesConfig(styles);

const Avatar: React.FC<IAvatarProps> = ({
	src,
	alt,
	className,
	onClick,
	size = "medium",
}) => {
	const [isImageValid, setIsImageValid] = useState(src ? true : false);

	const getAvatarSize = () => {
		switch (size) {
			case "small":
				return 100;
			case "medium":
				return 150;
			case "large":
				return 200;
			default:
				return typeof size === "number" ? size : 50;
		}
	};

	useEffect(() => {
		setIsImageValid(src ? true : false);
	}, [src]);

	return (
		<div
			className={classes("avatar") + ` ${className ?? ""}`}
			onClick={onClick}
			style={{
				width: getAvatarSize(),
				height: getAvatarSize(),
				cursor:
					onClick && typeof onClick === "function"
						? "pointer"
						: "auto",
			}}
		>
			{isImageValid ? (
				<Image
					src={src}
					alt={alt + ""}
					width={getAvatarSize() * 2}
					height={getAvatarSize() * 2}
					className={classes("avatar-image")}
					onError={() => {
						setIsImageValid(false);
					}}
				/>
			) : (
				<div className={classes("avatar-placeholder")}>
					<Typography family="poppins" size="head-2">
						{alt ? alt[0] : "A"}
					</Typography>
				</div>
			)}
		</div>
	);
};

export default Avatar;
