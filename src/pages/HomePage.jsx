import HeroSection from '../components/HeroSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ServiceSection from '../components/ServiceSection.jsx';
import TeamSection from '../components/TeamSection.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <TeamSection />
            <TestimonialsSection />
        </div>
    );
}   
export default HomePage;