import React from "react";

interface IResponsiveRow extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
}

interface IResponsiveCol extends React.HTMLAttributes<HTMLDivElement> {
	xlg?: number;
	lg?: number;
	md?: number;
	sm?: number;
	xsm?: number;
	children: React.ReactNode;
}

interface IResponsive {
	Row: React.FC<IResponsiveRow>;
	Col: React.FC<IResponsiveCol>;
}

const Row: React.FC<IResponsiveRow> = ({ children, className, ...rest }) => (
	<div className={`row ${className}`} {...rest}>
		{children}
	</div>
);

// use % to set width

const Col: React.FC<IResponsiveCol> = ({
	xlg = 100, // For extra large screens ( >= 1584px )
	lg = 100, // For large screens ( >= 1312px && < 1584px )
	md = 100, // For medium screens ( >= 1056px && < 1312px )
	sm = 100, // For small screens ( >= 672px && < 1056px )
	xsm = 100, // For extra small screens ( < 672px )
	className,
	children,
	...rest
}) => (
	<div
		className={`col-xlg-${xlg} col-lg-${lg} col-md-${md} col-sm-${sm} col-xsm-${xsm} ${className}`}
		{...rest}
	>
		{children}
	</div>
);

export const Responsive: IResponsive = {
	Row,
	Col,
};
