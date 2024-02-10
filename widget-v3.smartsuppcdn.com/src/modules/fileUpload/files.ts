import { get, writable } from 'svelte/store'

import { getFileImageData, getImageDataDimensions, getImageOrientation } from '@/utils/file'

import { errorMessage } from '../flashMessages'
import { t } from '../translations'
import { MAX_UPLOAD_FILES_LIMIT } from './constants'
import type { StoreFile } from './types'

const createFiles = () => {
	const files = writable<StoreFile[]>([])
	const { subscribe, update } = files

	const getFiles = (): File[] => get(files).map((item) => item.file)

	const find = (fileName: string, fileList?: StoreFile[]): StoreFile | null => {
		return (fileList || get(files)).find((item) => item.file.name === fileName) || null
	}

	const mapToStore = (file: File) =>
		({
			file,
			preview: {},
			previewState: 'none',
			uploadStatus: 'none',
		} as StoreFile)

	const add = (file: File | File[]) => {
		const files = Array.isArray(file) ? file : [file]
		update((storedFiles) => {
			if (storedFiles.length + files.length > MAX_UPLOAD_FILES_LIMIT) {
				errorMessage(`${get(t)('fileUpload.tooManyFiles')} ${MAX_UPLOAD_FILES_LIMIT}`)
				return storedFiles
			}
			return [...storedFiles, ...files.map(mapToStore)]
		})
		addPreviews(files)
	}

	const remove = (file: File) => {
		update((pendingFiles) => {
			return pendingFiles.filter((pendingFile) => pendingFile.file !== file)
		})
	}

	const count = (): number => get(files).length

	const isLimitReached = (): boolean => count() >= MAX_UPLOAD_FILES_LIMIT

	const clear = (): void => files.set([])

	// Uploading
	const setUploadingStatus = () => {
		files.update((prev) => {
			prev.forEach((storeFile) => (storeFile.uploadStatus = 'in-progress'))
			return prev
		})
	}

	const setFileUploaded = (fileName: string) => {
		files.update((prev) => {
			const storeFile = find(fileName, prev)
			if (storeFile) storeFile.uploadStatus = 'done'
			return prev
		})
	}

	// Previews
	const previewExists = (file: File) => {
		return find(file.name)?.previewState !== 'none'
	}

	const addPreviews = (files: File[]) => {
		files.forEach((file) => void addPreview(file))
	}

	const addPreview = async (file: File) => {
		if (previewExists(file)) return
		const data = await getFileImageData(file)
		const dimensions = data ? await getImageDataDimensions(data) : null
		const orientation = dimensions ? getImageOrientation(dimensions) : null
		files.update((prev) => {
			const storeFile = find(file.name, prev)
			if (!storeFile) return prev

			storeFile.previewState = 'ready'
			storeFile.preview = { data, dimensions, orientation }
			return [...prev]
		})
	}

	return {
		subscribe,
		getFiles,
		find,
		add,
		remove,
		count,
		isLimitReached,
		clear,
		setUploadingStatus,
		setFileUploaded,
	}
}

export const files = createFiles()
