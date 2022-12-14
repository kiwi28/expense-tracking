import React from "react";

import { Box, Grid, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { NavBar } from "../Components/NavBar";

export const Layout: React.FC = () => (
	<Box textAlign="center" fontSize="xl">
		<VStack minH="100vh" p={3}>
			<Box maxH="50px" w="100%">
				<NavBar />
			</Box>
			<Outlet />
		</VStack>
	</Box>
);
