const memberSubscription: ISubscription = {
	id: 1,
	subscription: 'Member',
	description: 'Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.',
	pricePerMonth: '$9.99',
	pricePerYear: '$89,99',
	availability: ['Exclusive Content', '5% Discount on Merch', 'Join the Community', 'Livestreaming Access'],
	link: 'https://taplink.ru/',
}

const familySubscription: ISubscription = {
	id: 2,
	subscription: 'Family',
	description: 'Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.',
	pricePerMonth: '$14.99',
	pricePerYear: '$130,99',
	availability: ['Everything in Tier 1', 'Free tickets to Events', 'Limited Edition Merch', 'Promote your Product', 'Request Topic'],
	link: 'https://taplink.ru/',
}

const officialSubscription: ISubscription = {
	id: 3,
	subscription: 'Official',
	description: 'Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.',
	pricePerMonth: '$29.99',
	pricePerYear: '$260,99',
	availability: ['Everything in Tier 2', 'Exclusive Badge on Livestreaming', 'Become an Official Sponsor', 'Early Access to All Episodes', 'Free Stikers and Merch'],
	link: 'https://taplink.ru/',
}

export { memberSubscription, familySubscription, officialSubscription }
