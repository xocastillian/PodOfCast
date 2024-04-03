import AboutHeroSection from '@/components/aboutHeroSection/AboutHeroSection'
import AboutHistory from '@/components/aboutHistory/AboutHistory'
import GetInTouch from '@/components/getInTouch/GetInTouch'
import OurSponsor from '@/components/ourSponsor/OurSponsor'
import React from 'react'

const About = () => {
	return (
		<>
			<AboutHeroSection />
			<AboutHistory />
			<OurSponsor />
			<GetInTouch/>
		</>
	)
}

export default About
