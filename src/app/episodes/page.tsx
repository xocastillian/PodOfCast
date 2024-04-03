import EpisodeFullCard from '@/components/episodeFullCard/EpisodeFullCard'
import LatestEpisodes from '@/components/latestEpisodes/LatestEpisodes'
import { podcasts } from '@/data/podcasts/podcasts'
import React from 'react'

const Episodes = () => {
	return (
		<>
			<EpisodeFullCard props={podcasts[0]} />
			<LatestEpisodes />
		</>
	)
}

export default Episodes
