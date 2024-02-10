export interface SmartsuppGlobalProps {
	vid?: string
}

export const getTopOrHostWindow = (): Window => window.top ?? window.parent

export const getHostWindow = (): Window => window.parent

export const getHostDocument = (): Document => getHostWindow().document

export const getOwnerDocument = (node: Node | null | undefined): Document => {
	return (node && node.ownerDocument) || document
}

export const provideSmartsuppGlobalProps = ({ vid }: Required<SmartsuppGlobalProps>) => {
	const smartsupp = (getHostWindow().smartsupp as SmartsuppGlobalProps) || {}
	smartsupp.vid = vid
	getHostWindow().smartsupp = smartsupp
}
