import SpinningCoin from './SpinningCoin';

const About = () => {
  return (
    <div className="bg-white py-20 px-6 text-center animate-slide-in">
      <h2 className="holo-text text-4xl font-bold mb-4">About BRRRCoin</h2>
      <br></br>
      <SpinningCoin />
      <br></br>
      <p className="text-lg text-gray-700">
        BrrrCoin is a community-driven cryptocurrency inspired by the money printer that goes brrr. Built for fun, powered by passion.
      </p>
    </div>
  );
};

export default About;
