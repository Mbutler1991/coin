import { useState, useEffect } from "react";

const Magic = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: isMobile ? "column" : "row",
    flexWrap: "wrap",
  };

  const textStyle = {
    width: isMobile ? "100%" : "50%",
    paddingRight: isMobile ? "0" : "1.5rem",
    boxSizing: "border-box",
    marginBottom: isMobile ? "2rem" : "0",
  };

  const imageStyle = {
    width: isMobile ? "100%" : "50%",
    paddingLeft: isMobile ? "0" : "1.5rem",
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
  };

  const imgStyle = {
    maxHeight: "30rem",
    width: "auto",
  };

  return (
    <div
      className="bg-gray-900"
      style={{
        padding: "5rem 1.5rem",
        color: "white",
        animation: "slide-in 1s ease-out",
      }}
    >
      <h2
        className="holo-text"
        style={{
          fontSize: "2.25rem",
          fontWeight: "bold",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        Glitch’s Magical Touch
      </h2>
      <div style={containerStyle}>
        <div style={imageStyle}>
          <img
            src="../images/glitchRound.png"
            alt="GlitchCoin logo"
            style={imgStyle}
          />
        </div>
        <div style={textStyle}>
          <p style={{ fontSize: "1.125rem" }}>
            One of the first viral comments under Glitch’s video came from a
            user named @CryptoChick. She posted: “I was broke last week. Saw
            Glitch, posted the meme, and decided to take a shot at some Solana
            NFTs. Flipped for 10x overnight. 4 good fortune is real!” This
            wasn’t an isolated case. TikTokers who followed the trend began
            sharing their stories:
            <ul>
            <li>A single mom posted Glitch’s meme and won a
            $10,000 sweepstake she’d forgotten she entered.</li>
            <li>A college student
            in debt shared the meme, then randomly found an old wallet
            containing $1,000 worth of Solana they thought they’d lost.</li>
            <li>A struggling musician posted the meme, declaring they’d get a big
            break. Two days later, their TikTok song went viral, and record
            labels started calling.</li>
            </ul>
            It wasn’t logical. It wasn’t even supposed
            to work. But it kept happening. The meme became a ritual. TikTokers
            posted Glitch’s image with captions stating their financial goals,
            tagging #MoneyGlitch and #4GoodFortune. Some claimed it was luck,
            others swore by “the glitch energy.” Either way, the belief spread
            like wildfire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Magic;
