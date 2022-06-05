import React from 'react';
import * as yup from 'yup';

const validationScheme = {
	//TODO: Validate max value for every element in numbers list
	inputNumbersListValidation: yup
		.string()
		.required()
		.matches(/^\d+( \d+)*$/)
		.min(3),
	inputNumbersLengthValidation: yup.number().required().min(0).max(15),
};
export const useAlgoPreviewForm = () => {
	const inputNumbersEl = React.useRef(null);
	const inputNumbersLengthEl = React.useRef(null);

	const [inputNumbersListError, setInputNumbersListError] =
		React.useState(false);
	const [inputNumbersLengthError, setInputNumbersLengthError] =
		React.useState(false);

	const inputValidation = async (scheme, input) => {
		return await scheme.isValid(input);
	};
	const handleRandomValidation = async () => {
		const valid = await inputValidation(
			validationScheme.inputNumbersLengthValidation,
			inputNumbersLengthEl.current.value
		);
		if (valid) {
			setInputNumbersLengthError(false);
		} else {
			setInputNumbersLengthError(true);
		}
	};

	const handleAddNumbersValidation = async () => {
		const valid = await inputValidation(
			validationScheme.inputNumbersListValidation,
			inputNumbersEl.current.value
		);
		if (valid) {
			setInputNumbersListError(false);
		} else {
			setInputNumbersListError(true);
		}
	};

	return {
		inputNumbersEl,
		inputNumbersListError,
		handleRandomValidation,
		inputNumbersLengthEl,
		inputNumbersLengthError,
		handleAddNumbersValidation,
	};
};
