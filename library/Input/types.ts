import React from "react";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
	styles?: {
		box?: React.CSSProperties;
		label?: React.CSSProperties;
		input?: React.CSSProperties;
	};
	label?: string | any;
}
