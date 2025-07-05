import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import MedenceLegal from '@/components/MedenceLegal';
import UserReviews from '@/components/UserReviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <MedenceLegal />
      <UserReviews />
      <FAQ />
      <Footer />
    </div>
  );
}