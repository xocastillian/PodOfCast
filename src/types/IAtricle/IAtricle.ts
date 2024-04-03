interface IAtricle {
	id: number
	title: string
	mainCategory: IArticleCategory
	text: string
	date: string
	link: string
	img: string
	categories: IArticleCategory[]
}
