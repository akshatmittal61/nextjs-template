import { fallbackAssets } from "@/constants";
import { stylesConfig } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { AvatarProps } from "./types";

const classes = stylesConfig(styles);

const Avatar: React.FC<AvatarProps> = ({
	src,
	alt,
	fallback = fallbackAssets.avatar,
	shape = "circle",
	className,
	onClick,
	size = "medium",
	...props
}) => {
	const [isImageValid, setIsImageValid] = useState(
		src && (src.startsWith("https://") || src.startsWith("/"))
			? true
			: false
	);
	const [imageUrl, setImageUrl] = useState(
		src && (src.startsWith("https://") || src.startsWith("/")) ? src : ""
	);

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

	const getImageUrlFromDriveLink = (link: string) => {
		// eslint-disable-next-line no-useless-escape
		const regex = /^https:\/\/drive\.google\.com\/file\/d\/([^\/]+)(\/|$)/;
		const match = link.match(regex);
		if (match && match[1]) {
			const assetUrl = `https://lh3.googleusercontent.com/d/${match[1]}=w1000`;
			return assetUrl;
		} else {
			return link;
		}
	};

	useEffect(() => {
		if (src && (src.startsWith("https://") || src.startsWith("/"))) {
			setIsImageValid(true);
		} else {
			setIsImageValid(false);
		}
		setImageUrl(getImageUrlFromDriveLink(src));
	}, [src, fallback]);

	return (
		<div
			className={
				classes("avatar", `avatar-shape--${shape}`) +
				` ${className ?? ""}`
			}
			onClick={onClick}
			title={alt}
			{...props}
			style={{
				width: getAvatarSize(),
				height: getAvatarSize(),
				cursor:
					onClick && typeof onClick === "function"
						? "pointer"
						: "auto",
				...props.style,
			}}
		>
			{isImageValid ? (
				<Image
					src={imageUrl}
					alt={alt + ""}
					width={getAvatarSize() * 2}
					height={getAvatarSize() * 2}
					className={classes("avatar-image")}
					onError={() => {
						setIsImageValid(false);
					}}
				/>
			) : (
				<Image
					src={fallback}
					alt={alt + ""}
					width={getAvatarSize() * 2}
					height={getAvatarSize() * 2}
					className={classes("avatar-image")}
				/>
			)}
		</div>
	);
};

export default Avatar;
