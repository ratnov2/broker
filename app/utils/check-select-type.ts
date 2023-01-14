import { MultiValue, SingleValue } from "react-select";

export function isMultiValue<T>(
	arg: MultiValue<T> | SingleValue<T>
): arg is MultiValue<T> {
	return Array.isArray(arg)
}
