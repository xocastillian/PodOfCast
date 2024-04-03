import { categories } from './categoriesOfPodcasts'
import { podcastHost } from './podcastHost'

import img1 from '@/img/podcasts cover/Perplexed Mind.svg'
import img2 from '@/img/podcasts cover/Type of Social Classes of People.svg'
import img3 from '@/img/podcasts cover/Self–confidence.svg'
import img4 from '@/img/podcasts cover/Women’s Rights.svg'
import img5 from '@/img/podcasts cover/Tesla Autopilot Controversy.svg'
// import img6 from '@/img/podcasts cover/Pandemic Becoming Endemic.png'

export const podcasts: IPodcast[] = [
	{
		id: 1,
		title: 'Are you a Perplexed Mind Person?',
		descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
		link: 'https://taplink.ru/',
		categories: [categories.find(category => category.category === 'mind-behaviour')!, categories.find(category => category.category === 'health')!],
		img: img1.src,
		hosts: [podcastHost.find(host => host.name === 'Timqa')!, podcastHost.find(host => host.name === 'Dil')!],
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
		date: 'Sep 22, 2021',
	},

	{
		id: 2,
		title: 'Type of Social Classes of People',
		descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
		link: 'https://taplink.ru/',
		categories: [categories.find(category => category.category === 'social class')!, categories.find(category => category.category === 'wealth')!],
		img: img2.src,
		hosts: [podcastHost.find(host => host.name === 'Timqa')!, podcastHost.find(host => host.name === 'Dil')!],
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
		date: 'Sep 22, 2021',
	},

	{
		id: 3,
		title: 'How to Deal with Self–Confidence',
		descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
		link: 'https://taplink.ru/',
		categories: [categories.find(category => category.category === 'self-esteem')!, categories.find(category => category.category === 'health')!],
		img: img3.src,
		hosts: [podcastHost.find(host => host.name === 'Timqa')!, podcastHost.find(host => host.name === 'Dil')!],
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
		date: 'Sep 22, 2021',
	},

	{
		id: 4,
		title: 'Women`s Rights? Is it alright?',
		descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
		link: 'https://taplink.ru/',
		categories: [categories.find(category => category.category === 'women’s rights')!],
		img: img4.src,
		hosts: [podcastHost.find(host => host.name === 'Timqa')!, podcastHost.find(host => host.name === 'Dil')!],
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
		date: 'Sep 22, 2021',
	},

	{
		id: 5,
		title: 'Tesla Autopilot Controversy',
		descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
		link: 'https://taplink.ru/',
		categories: [categories.find(category => category.category === 'automation')!, categories.find(category => category.category === 'tech')!],
		img: img5.src,
		hosts: [podcastHost.find(host => host.name === 'Timqa')!, podcastHost.find(host => host.name === 'Dil')!],
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
		date: 'Sep 22, 2021',
	},

	{
		id: 6,
		title: 'Pandemic Becoming Endemic',
		descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
		link: 'https://taplink.ru/',
		categories: [categories.find(category => category.category === 'covid-19')!, categories.find(category => category.category === 'health')!],
		img: img5.src,
		hosts: [podcastHost.find(host => host.name === 'Timqa')!, podcastHost.find(host => host.name === 'Dil')!],
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
		date: 'Sep 22, 2021',
	},
]
