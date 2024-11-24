import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const container = document.querySelector('.dollar-container');

    for (let i = 0; i < 50; i++) {
      const img = document.createElement('img');
      img.src = '/images/dollar.png'; // Correctly reference the public folder
      img.classList.add('dollar');

      // Add random horizontal positioning and animation delays
      img.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      img.style.animationDelay = `${Math.random() * 5}s`; // Random delay
      img.style.animationDuration = `${3 + Math.random() * 2}s`;
      img.style.width = '360px'; // Make notes three times larger
      img.style.height = 'auto';

      container.appendChild(img);
    }
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      <div className="dollar-container absolute top-0 left-0 w-full h-full overflow-hidden"></div>
      <h1 className="welcome-text">Money Printer Goes BRRR</h1>
    </div>
  );
};

export default Hero;
