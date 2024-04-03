import { testimonialSources } from './testimonialSources'

import luna from '@/img/icons/Luna lovegood.svg'
import emily from '@/img/icons/Emily Blunt.svg'
import mia from '@/img/icons/Mia Winters.svg'

export const testimonals: ITestimonial[] = [
	{
		id: 1,
		autor: 'Luna lovegood',
		autorAvatar: luna,
		text: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.',
		source: testimonialSources.find(source => source.source === 'Spotify')!,
	},

	{
		id: 2,
		autorAvatar: emily,
		autor: 'Emily Blunt',
		text: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.',
		source: testimonialSources.find(source => source.source === 'Google Podcast')!,
	},

	{
		id: 3,
		autor: 'Mia Winters',
		autorAvatar: mia,
		text: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.',
		source: testimonialSources.find(source => source.source === 'Spotify')!,
	},

	{
		id: 4,
		autor: 'Timqa',
		text: 'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.',
		source: testimonialSources.find(source => source.source === 'Spotify')!,
	},
]
