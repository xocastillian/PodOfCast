import inst from '@/img/icons/instmain.svg'
import tt from '@/img/icons/tiktokmain.svg'
import tw from '@/img/icons/twittermain.svg'

import timqa from '@/img/icons/podcastHost/timqa.svg'
import dil from '@/img/icons/podcastHost/dil.svg'

export const podcastHost: IPodcastHost[] = [
	{
		id: 1,
		img: timqa,
		name: 'Porter Severus',
	},

	{
		id: 2,
		img: dil,
		name: 'Marques Keith',
	},
]

const PorterSeverus: IHost = {
	id: 3,
	name: 'Porter Severus',
	img: timqa,
	links: {
		instLink: {
			link: 'https://instagram.com/crevier_',
			img: inst,
		},
		ttLink: {
			link: 'https://tiktok.com',
			img: tt,
		},
		twLink: {
			link: 'https://twitter.com',
			img: tw,
		},
	},
}

const MarquesKeith: IHost = {
	id: 4,
	img: dil,
	name: 'Marques Keith',
	links: {
		instLink: {
			link: 'https://instagram.com/timqaqaqaqaqa',
			img: inst,
		},
		ttLink: {
			link: 'https://tiktok.com',
			img: tt,
		},
		twLink: {
			link: 'https://twitter.com',
			img: tw,
		},
	},
}

export { PorterSeverus, MarquesKeith }
