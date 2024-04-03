interface IPodcast {
	id: number
	title: string
	descr: string
	categories: IPodcastCategory[]
	img: string
	link: string
	hosts: IPodcastHost[]
	text?: string
	date?: string
}
