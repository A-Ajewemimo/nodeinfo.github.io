export type InternalFieldName = string

export type FieldValue<TFieldValues extends FieldValues> = TFieldValues[InternalFieldName]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FieldValues = Record<string, any>

export type FieldValidationType = 'required' | 'checked' | 'email' | 'phone'

export interface FieldValidation {
	type: FieldValidationType
	isValid: boolean
}

export type Validator = (value: unknown) => FieldValidation

export type FormValidators = Record<string, Validator[]>

export type FormErrors = Record<string, FieldValidationType | null>

export enum FormControlType {
	Text = 'text',
	Checkbox = 'checkbox',
	Select = 'select',
}

interface BaseFormControl<T extends string> {
	type: FormControlType
	name: T
	label: string
	placeholder?: string
	isHidden?: boolean
	validators: Validator[]
}

export interface TextInput<T extends string> extends BaseFormControl<T> {
	type: FormControlType.Text
	subType: 'text' | 'email' | 'tel'
	value: string
	maxLength?: number
}

export interface Checkbox<T extends string> extends BaseFormControl<T> {
	type: FormControlType.Checkbox
	value: boolean
}

export interface SelectOption {
	text: string
	value: string
}

interface Select<T extends string> extends BaseFormControl<T> {
	type: FormControlType.Select
	options: SelectOption[]
	value: string
}

export type FormControl<T extends string = string> = TextInput<T> | Checkbox<T> | Select<T>
