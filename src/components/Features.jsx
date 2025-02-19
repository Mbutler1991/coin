import SpinningCoin from "./SpinningCoin";

const Features = () => {
  return (
    <div className=" py-20 px-6" style={{ backgroundColor: '#0088ff' }}>
      <SpinningCoin />
      <br></br>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="bg-gray-900 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 flex-1">
          <h3 className="text-2xl holo-text-standard font-bold mb-2">
            From Meme to Coin
          </h3>
          <p className="text-white">
            As the TikTok trend exploded, crypto enthusiasts recognized an
            opportunity. If Glitch could inspire financial breakthroughs, why
            not create a token to embody his message? That’s when the
            $MONEYGLITCH coin was born—a pure meme coin with no taxes, no
            tricks, and all liquidity permanently burned. It launched on
            Pump.fun, Avalanche’s meme coin playground, ensuring a fair and
            decentralized debut.<br></br>
            Why It’s Different:<br></br>
            Unlike other meme coins, $MONEYGLITCH doesn’t pretend to offer
            utilities or gimmicks. Its value is rooted in the community—a shared
            belief in positivity, abundance, and, of course, good fortune. It’s
            not about promises; it’s about vibes.
          </p>
        </div>
        <div className="bg-gray-900 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 flex-1">
          <h3 className="text-2xl holo-text-standard font-bold mb-2">
            Why People Post the Meme
          </h3>
          <p className="text-white">
            The magic of Money Glitch lies in its simplicity. Here’s how it
            works:<br></br>1. Post Glitch’s meme on TikTok or any platform,
            tagging it with #MoneyGlitch and #4GoodFortune.<br></br>2. State
            your financial intention. Be bold about your goals—whether it’s
            paying off debt, landing a big deal, or making your first million.
            <br></br>3. Trust the glitch. No negativity, no doubts.<br></br>
            People don’t post the meme just for the trend. They post it because,
            somewhere deep down, they believe in the power of collective
            positivity. Glitch himself hasn’t posted anything since the original
            video, but his legacy lives on as a symbol of financial freedom and
            chill energy.
          </p>
        </div>
        <div className="bg-gray-900 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 flex-1">
          <h3 className="text-2xl holo-text-standard font-bold mb-2">
            Why $MONEYGLITCH is Bullish
          </h3>
          <p className="text-white">
            <ul>
              <li>Community-Driven: The coin is powered entirely by belief and virality. No taxes, no middlemen—just pure meme energy.</li>
              <li>Fair Launch: Pump.fun ensures a fair and decentralized launch, with no whales controlling the market.</li>
              <li>The TikTok Effect: With millions of TikTokers already believing in “The Glitch,” $MONEYGLITCH taps directly into a massive, engaged audience.</li>
              <li>Good Vibes Only: In a sea of overpromised tokens, $MONEYGLITCH is refreshingly honest. It’s not a utility—it’s a movement.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
