"use client";
import { Box, Button, useTheme } from "@mui/material";

export default function App() {
	const theme = useTheme();
	return (
		<Box
			minHeight="100vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
			gap={2}
		>
			<Button variant="contained" color="neutral">
				neutral
			</Button>
			<Button
				variant="contained"
				sx={{
					color: "error.contrastText",
					bgcolor: "error.light",
					"&:hover": {
						bgcolor: "error.main",
					},
				}}
			>
				error
			</Button>
			<Button variant="outlined" color="secondary">
				secondary
			</Button>
			<Button
				variant="outlined"
				sx={{
					color: theme.palette.warning.dark,
					borderColor: theme.palette.warning.light,
					"&:hover": {
						borderColor: theme.palette.warning.main,
					},
				}}
			>
				warn
			</Button>
		</Box>
	);
}
