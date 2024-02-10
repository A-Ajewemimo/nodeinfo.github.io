import { lastItemOfArray } from '@/utils/arrays'
import { printError } from '@/utils/console'

import { errorMessage } from '../flashMessages'
import { visitorClientProvider } from '../websocketClient'
import { FALLBACK_FILE_TYPE } from './constants'
import type { SizeUnits, StoreFile } from './types'

export const getFileExtension = (fileName: string) =>
	fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2).toLowerCase()

export const prettyFileSize = (size: number): { size: number; unit: SizeUnits } => {
	let newSize = size
	let unitIndex = 0
	const units: SizeUnits[] = ['B', 'KB', 'MB', 'GB']

	while (newSize >= 1024 && unitIndex < units.length - 1) {
		newSize /= 1024
		unitIndex++
	}

	return {
		size: Math.floor(newSize),
		unit: units[unitIndex],
	}
}

export const prettyFileType = (fileName: string): string => {
	const parts = fileName.split('.')
	const lastPart = lastItemOfArray(parts)
	if (!lastPart) return FALLBACK_FILE_TYPE
	return lastPart.toUpperCase()
}

export const getDownloadUrl = (url: string, name: string): string => {
	return `${url}?name=${name}`
}

export const uploadFilesToServer = async (storeFiles: StoreFile[], onUploaded: (file: File) => void) => {
	const client = visitorClientProvider.getClient()
	const tokens: string[] = []

	for (const { file } of storeFiles) {
		const uploadData = await client.chatUploadInit()
		const formData = new FormData()
		formData.append('file', file, file.name)

		try {
			const uploadResponse = await fetch(uploadData.url, {
				method: 'post',
				body: formData,
			})
			if (!uploadResponse.ok) throw new Error('Upload failed')
			tokens.push(uploadData.token)
		} catch (err) {
			printError(`File [${file.name}] upload failed`)
			errorMessage('fileUpload.filesWerentProcessed')
		} finally {
			onUploaded(file)
		}
	}
	return tokens
}

export const uploadFile = async (uploadToken: string) => {
	const client = visitorClientProvider.getClient()
	try {
		void (await client.chatUploadFinish(uploadToken))
	} catch (err) {
		printError(`Failed to finish file upload for ${uploadToken}`)
	}
}
