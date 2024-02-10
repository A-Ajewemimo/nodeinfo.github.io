// TODO [reminder cca 1.1.2024] use Array.at instead if it is fully supported
export function lastItemOfArray<T>(array: T[]): T | null {
	if (array.length === 0) return null
	return array[array.length - 1]
}
