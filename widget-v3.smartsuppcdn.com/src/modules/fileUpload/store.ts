import { get, writable } from 'svelte/store'

import { printWarning } from '@/utils/console'

import { ConnectionStatus } from '../app'
import { connectionStatus } from '../app/connectionStatus'
import { dynamicWidgetOptions } from '../chat'
import { errorMessage } from '../flashMessages'
import { hasContactOrAgentMessage } from '../messages'
import { t } from '../translations'
import { fileUploadConfig } from './config'
import { MAX_UPLOAD_FILES_LIMIT } from './constants'
import { files } from './files'
import { getFileExtension, prettyFileSize, uploadFilesToServer } from './utils'

export const isFileUploadDisabled = (): boolean => {
	const connectionStatusData = get(connectionStatus)
	const hasContactOrAgentMessageData = get(hasContactOrAgentMessage)
	const dynamicWidgetOptionsData = get(dynamicWidgetOptions)
	return (
		connectionStatusData === ConnectionStatus.Disconnected ||
		!hasContactOrAgentMessageData ||
		dynamicWidgetOptionsData.disableAttachments
	)
}

export const fileUploadInProgress = writable(false)

export const checkAndAddFiles = (incomingFiles: File[]) => {
	if (get(fileUploadInProgress)) {
		printWarning('There is already file upload in progress')
		return
	}

	if (incomingFiles.length === 0) return

	const validFiles = checkMultipleFilesBeforeUpload(incomingFiles)
	if (validFiles.length > 0) {
		files.add(validFiles)
	}
}

const checkMultipleFilesBeforeUpload = (files: File[]): File[] => {
	// Check max files count
	if (files.length > MAX_UPLOAD_FILES_LIMIT) {
		errorMessage(`${get(t)('fileUpload.tooManyFiles')} ${MAX_UPLOAD_FILES_LIMIT}`)
		return []
	}

	return files.filter((file: File) => checkFileBeforeUpload(file))
}

const checkFileBeforeUpload = (file: File | null): boolean => {
	const { acceptedFileExtensions, acceptedFileTypes, maxFileSize } = get(fileUploadConfig)
	if (!file) return false

	const includesFileExtension = acceptedFileExtensions.includes(getFileExtension(file.name))
	// TODO BE should provide header byte map with pattern to detect file mimes correctly
	// https://mimesniff.spec.whatwg.org/#matching-an-image-type-pattern
	const includesFileType = acceptedFileTypes.some((mimeType) => mimeType === file.type)

	// Check if file upload is allowed
	if (isFileUploadDisabled()) {
		printWarning('File upload is disabled')
		return false
	}
	// First message check
	if (!get(hasContactOrAgentMessage)) {
		errorMessage(get(t)('warningBar.uploadFileNotFirst'))
		return false
	}
	// Size checking
	if (file.size > maxFileSize) {
		const prettySize = prettyFileSize(maxFileSize)
		errorMessage(`${get(t)('fileUpload.fileTooBig')} ${prettySize.size} ${prettySize.unit}`)
		return false
	}
	// Validate that file corresponds to mime type and extension
	if (!(includesFileExtension || includesFileType)) {
		errorMessage(get(t)('fileUpload.badFileType'))
		return false
	}

	return true
}

export const uploadFiles = () => {
	if (files.count() === 0) return []
	files.setUploadingStatus()
	return uploadFilesToServer(get(files), (uploadedFile) => files.setFileUploaded(uploadedFile.name))
}
