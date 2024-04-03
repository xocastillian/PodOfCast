import setupYourOwnPodcastImg from '@/img/article cover/Setup Your Own Podcast.png'
import doodleArtworkImg from '@/img/article cover/Doodle Artwork 101.png'
import motherNatureTakingOverImg from '@/img/article cover/Mother Nature Taking Over.png'
import howtoBeProductiveImg from '@/img/article cover/How to Be Productive.png'

import { art, business, creative, mindset, nature, news, podcast, productivity, startup, tipsTrick } from './articlesCategories'

export const setupYourOwnPodcast: IAtricle = {
	id: 1,
	title: 'Setup Your Own Podcast',
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...',
	mainCategory: podcast,
	date: 'Sep 14, 2021',
	link: '#',
	img: setupYourOwnPodcastImg.src,
	categories: [business, podcast, startup],
}

export const doodleArtwork: IAtricle = {
	id: 2,
	title: 'Doodle Artwork 101',
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...',
	mainCategory: tipsTrick,
	date: 'Sep 12, 2021',
	link: '#',
	img: doodleArtworkImg.src,
	categories: [art, tipsTrick, creative],
}

export const motherNatureTakingOver: IAtricle = {
	id: 3,
	title: 'Mother Nature Taking Over',
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...',
	mainCategory: news,
	date: 'Sep 10, 2021',
	link: '#',
	img: motherNatureTakingOverImg.src,
	categories: [news, nature],
}

export const howtoBeProductive: IAtricle = {
	id: 4,
	title: 'How to Be Productive',
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...',
	mainCategory: productivity,
	date: 'Sep 8, 2021',
	link: '#',
	img: howtoBeProductiveImg.src,
	categories: [productivity, mindset],
}
