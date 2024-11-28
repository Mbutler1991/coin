import { useState, useEffect } from 'react';

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: isMobile ? 'column' : 'row',
    flexWrap: 'wrap',
  };

  const textStyle = {
    width: isMobile ? '100%' : '50%',
    paddingRight: isMobile ? '0' : '1.5rem',
    boxSizing: 'border-box',
    marginBottom: isMobile ? '2rem' : '0',
  };

  const imageStyle = {
    width: isMobile ? '100%' : '50%',
    paddingLeft: isMobile ? '0' : '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
  };

  const imgStyle = {
    maxHeight: '30rem',
    width: 'auto',
  };

  return (
    <div className="bg-gray-900" style={{ padding: '5rem 1.5rem', color: 'white', animation: 'slide-in 1s ease-out' }}>
      <h2 className="holo-text" style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center' }}>The Legend of Glitch: “4 Good Fortune”</h2>
      <div style={containerStyle}>
        <div style={textStyle}>
          <p style={{ fontSize: '1.125rem' }}>
            It all started with a guy named Glitch. Nobody really knows his real name, but everyone knows his
            story—a laid-back dude, dressed in an oversized hoodie, sipping on a mystery drink, with the words “4
            Good Fortune” scribbled on the side of his cup. The original video, uploaded on TikTok, wasn’t
            anything special. It was just Glitch casually saying, “Y’all worried too much about the grind. Just
            chill... The money glitch is real. 4 good fortune.”
            He winked, raised his cup, and the screen faded to black.
          </p>
        </div>
        <div style={imageStyle}>
          <img src="../images/logoGlitch.PNG" alt="GlitchCoin logo" style={imgStyle} />
        </div>
      </div>
    </div>
  );
};

export default About;
