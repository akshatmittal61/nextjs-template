/* 
    Font Type
    - Heading
    - Body

    Font Variant
    - Heading
        - Display
        - Subtitle
        - Title 1
        - Title 2
        - Title 3
        - Title 4
        - Eyebrow
    - Body
        - Extra Large
        - Large
        - Medium
        - Small
    
    Font Format
    - Body
        - Regular
        - Medium
        - Bold
        - Underlined
        - Italic
        - Bold Italic
 */

import React from "react";

export type FontType = "heading" | "body";
export type FontVariant<T extends FontType> = T extends "heading"
	?
			| "display"
			| "subtitle"
			| "title-1"
			| "title-2"
			| "title-3"
			| "title-4"
			| "eyebrow"
	: "extra-large" | "large" | "medium" | "small";
export type FontFormat<T extends FontType> = T extends "heading"
	? never
	: "regular" | "medium" | "bold" | "underlined" | "italic" | "bold-italic";

export interface FontHeading {
	type: "heading";
	variant: FontVariant<"heading">;
	format?: FontFormat<"heading">;
}

export interface FontBody {
	type: "body";
	variant: FontVariant<"body">;
	format?: FontFormat<"body">;
}

export type Font = FontHeading | FontBody;

export type TypographyProps = Font & {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	title?: string;
	onClick?: () => void;
};
