"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		secondary: {
			main: "#616161",
			light: "#9e9e9e",
			dark: "#212121",
			contrastText: "#fff",
		},
	},
});

export default theme;
