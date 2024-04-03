import BenefitsSection from '@/components/benefitsSection/BenefitsSection'
import HeroSection from '@/components/heroSection/HeroSection'
import InspiredSection from '@/components/inspiredSection/InspiredSection'
import NewsSection from '@/components/newsSection/NewsSection'
import RecentSection from '@/components/recentSection/RecentSection'
import SponsorSection from '@/components/sponsorSection/SponsorSection'
import Testimonials from '@/components/testimonials/Testimonials'

export default function Home() {
	return (
		<>
			<HeroSection />
			<InspiredSection />
			<Testimonials />
			<BenefitsSection />
			<RecentSection />
			<SponsorSection />
			<NewsSection />
		</>
	)
}
