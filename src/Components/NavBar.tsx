import * as React from "react";
import { Link, BoxProps, Flex, Image, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const NavBar: React.FC<BoxProps> = () => (
	<Flex justifyContent="center" gap="20px" mb={30} alignItems="center">
		<Box marginRight="auto">
			<Image
				boxSize="50px"
				objectFit="contain"
				src="/public/logo.png"
				alt="logo"
			/>
		</Box>
		<Link as={RouterLink} to="/register">
			Register
		</Link>
		<Link as={RouterLink} to="/login">
			Log in
		</Link>
		<Link as={RouterLink} to="/">
			Home
		</Link>
		<ColorModeSwitcher marginLeft="auto" />
	</Flex>
);
