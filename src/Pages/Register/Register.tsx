import { Button, Text, VStack } from "@chakra-ui/react";
import { Form, Formik, FormikProps } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { TextField } from "../../Components/TextField";
import { IRegisterFields } from "../../types";

const statementSchema = Yup.object({
	email: Yup.string()
		.required("Email address is required")
		.email("This is not a valid email address"),
	password: Yup.string()
		.required("Password is required")
		.min(3, "Password is too short"),
});

export const Register: React.FC = () => {
	const [initialValues, setInitialValues] = useState<IRegisterFields>({
		username: "",
		email: "",
		password: "",
	});

	return (
		<VStack flex={1} overflow="auto" justifyContent="space-evenly">
			<Formik
				onSubmit={(values, actions) => {
					alert(JSON.stringify(values, null, 2));
					actions.resetForm();
				}}
				initialValues={initialValues}
				validationSchema={statementSchema}
			>
				{(formik: FormikProps<IRegisterFields>) => (
					<Form onSubmit={formik.handleSubmit}>
						<VStack
							mx="auto"
							w={{ base: "90%", md: 500 }}
							justifyContent="center"
						>
							<Text fontSize={25}>REGISTER</Text>
							<TextField
								label="Username"
								type="text"
								name="username"
								placeholder="username123"
							/>
							<TextField
								label="Email"
								type="email"
								name="email"
								placeholder="example@email.com"
							/>
							<TextField
								label="Password"
								type="password"
								name="password"
								placeholder="********"
							/>

							<Button
								className="submit"
								type="submit"
								colorScheme="teal"
								variant="outline"
								w="100%"
							>
								Register
							</Button>
						</VStack>
					</Form>
				)}
			</Formik>
		</VStack>
	);
};
