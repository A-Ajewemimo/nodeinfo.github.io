export const hasOwnProperty = <X extends Record<string, unknown>, Y extends PropertyKey>(
	obj: X,
	prop: Y,
): obj is X & Record<Y, unknown> => {
	// eslint-disable-next-line no-prototype-builtins
	return obj.hasOwnProperty(prop)
}
