import React from "react";

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
	src: string;
	alt: string;
	fallback?: string;
	shape?: "circle" | "square";
	className?: string;
	onClick?: () => void;
	size?: "small" | "medium" | "large" | number;
};

export type AvatarStackProps = Omit<AvatarProps, "src" | "alt" | "children"> & {
	children: Array<{ src: string; alt: string }>;
	stack?: boolean;
};
