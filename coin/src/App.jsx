import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';
import SocialNavbar from './components/SocialNavBar';
import Intro from './components/Intro';
import Magic from './components/Magic';
import Legacy from './components/Legacy';


const App = () => {
  return (
    <>
      <SocialNavbar />
      <Hero />
      <About />
      <Intro />
      <Magic />
      <Features />
      <Legacy />
      <Footer />
    </>
  );
};

export default App;
