const Hero = () => {
  return (
    <div className="bg-gray-900 text-white py-20 px-6 text-center animate-fade-in">
      <h1 className="text-5xl font-bold mb-4">Welcome to LunaCoin</h1>
      <p className="text-lg mb-6">
        The cryptocurrency inspired by the viral sensation, Luna the Cat.
      </p>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded transition duration-300 ease-in-out transform hover:scale-105">
        Learn More
      </button>
    </div>
  );
};

export default Hero;
