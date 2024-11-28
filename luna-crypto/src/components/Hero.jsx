import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const container = document.querySelector('.dollar-container');

    for (let i = 0; i < 50; i++) {
      const img = document.createElement('img');
      img.src = '/images/oneglitch.jpg';
      img.alt = 'glitch dollar'; 
      img.classList.add('dollar');

      // Add random horizontal positioning and animation delays
      img.style.left = `${Math.random() * 100}vw`; 
      img.style.animationDelay = `${Math.random() * 5}s`; 
      img.style.animationDuration = `${3 + Math.random() * 2}s`;
      img.style.width = '360px'; 
      img.style.height = 'auto';

      container.appendChild(img);
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="dollar-container bg-gray-900 absolute top-0 left-0 w-full h-full overflow-hidden"></div>
      <h1 className="welcome-text">The Money Glitch</h1>
    </div>
  );
};

export default Hero;
