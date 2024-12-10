import { Header } from '../components/Header';
import { About } from '../components/About';
import { EventDetails } from '../components/EventDetails';
import { Contact } from '../components/Contact';
import { FloatingButton } from '../components/FloatingButton';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header 
        universityLogo="/AnuragUniversityLOGO_BLC.png" 
        clubLogo="/blockckainlogo.png" 
        bannerImage="/dechack.png" 
      />
      <About />
      <EventDetails />
      <Contact />
      <FloatingButton />
      <Footer clubLogo="/blockckainlogo.png" />
    </div>
  );
}