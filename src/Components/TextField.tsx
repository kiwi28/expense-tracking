import React from "react";
import {
	BoxProps,
	FormControl,
	FormHelperText,
	FormErrorMessage,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import { Field, FieldHookConfig, useField } from "formik";
import { ILabelProp } from "../types";

export const TextField: React.FC<
	ILabelProp & FieldHookConfig<string> & BoxProps
> = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<FormControl isInvalid={!!meta.error && !!meta.touched}>
			<FormLabel>{label}</FormLabel>
			<Field as={Input} {...field} {...props} />
			{meta.touched && meta.error ? (
				<FormErrorMessage>{meta.error}</FormErrorMessage>
			) : (
				<FormHelperText visibility="hidden">i</FormHelperText>
			)}
		</FormControl>
	);
};
