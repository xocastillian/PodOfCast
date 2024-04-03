interface IHost {
	id: number
	name: string
	links: IHostLink
	img?: string
}

interface IHostLink {
	instLink?: ISocailLink
	ttLink?: ISocailLink
	twLink?: ISocailLink
}

interface ISocailLink {
	link: string
	img?: string
}
