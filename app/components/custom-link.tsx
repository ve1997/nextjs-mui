import { Link as MuiLink, type LinkProps as MuiLinkProps } from "@mui/material";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import type { JSX } from "react";

type CustomLinkProps = Omit<MuiLinkProps, "href"> & {
	href: NextLinkProps["href"];
	unstyled?: boolean;
};

export function CustomLink({
	href,
	unstyled = false,
	children,
	...props
}: Readonly<CustomLinkProps>): JSX.Element {
	const hrefPath = typeof href === "string" ? href : href.pathname ?? "/";
	const isInternal = hrefPath.startsWith("/") || hrefPath.startsWith("#");

	if (isInternal) {
		return (
			<MuiLink
				{...props}
				href={href}
				component={NextLink}
				color={unstyled ? "#000" : props.color}
				underline={unstyled ? "none" : props.underline}
				sx={props.sx}
			>
				{children}
			</MuiLink>
		);
	}

	return (
		<MuiLink
			{...props}
			href={href}
			component={NextLink}
			color={unstyled ? "#000" : props.color}
			underline={unstyled ? "none" : props.underline}
			sx={props.sx}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</MuiLink>
	);
}
