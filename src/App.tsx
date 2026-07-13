import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Rulebook } from './components/Rulebook';
import { HowToPlay } from './components/HowToPlay';
import { CardGallery } from './components/CardGallery';
import { PlayOnline } from './components/PlayOnline';
import { DesignerDiary } from './components/DesignerDiary';
import { Community } from './components/Community';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-500">
      <Navigation />
      <main>
        <Hero />
        <Rulebook />
        <HowToPlay />
        <CardGallery />
        <PlayOnline />
        <DesignerDiary />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
