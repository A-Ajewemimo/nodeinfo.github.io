import { printError } from './console'

export interface FileDimensions {
	width: number
	height: number
}

export interface FileOrientation {
	horizontal: boolean
	vertical: boolean
}

export const isFileImage = (mimeType: string): boolean => mimeType.split('/')[0] === 'image'
export const isFileVideo = (mimeType: string): boolean => !!mimeType.match(/^video\/(?:mp4|webm|ogg){1}$/)

export async function getFileImageData(file: File): Promise<string | null> {
	if (!FileReader) {
		printError('FileReader not supported')
		return null
	}
	const fr = new FileReader()

	return new Promise((resolve) => {
		fr.onload = () => {
			if (!fr.result) {
				resolve(null)
				return
			}

			let result: string | null
			if (typeof fr.result === 'string') {
				result = fr.result
			} else {
				result = fr.result.toString()
			}
			// Sanitize corrupted files (PDF renamed to PNG)
			if (!result.startsWith('data:image')) {
				result = null
			}
			resolve(result)
		}
		fr.onerror = () => {
			printError('Failed to load image data')
			resolve(null)
		}
		fr.readAsDataURL(file)
	})
}

export async function getImageDataDimensions(fileData: string): Promise<FileDimensions | null> {
	return new Promise((resolve) => {
		const img = document.createElement('img')
		img.onload = () => {
			resolve({ width: img.width, height: img.height })
		}
		img.onerror = () => {
			printError('Failed to obtain image dimensions')
			resolve(null)
		}
		img.src = fileData
	})
}

export function getImageOrientation(dimensions: FileDimensions): FileOrientation {
	return {
		horizontal: dimensions.width > dimensions.height,
		vertical: dimensions.height > dimensions.width,
	}
}
