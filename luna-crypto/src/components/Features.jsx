const Features = () => {
  return (
    <div className="bg-gray-100 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Why Choose LunaCoin?</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-2">Community-Driven</h3>
          <p>LunaCoin thrives on the support and enthusiasm of its community.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-2">Eco-Friendly</h3>
          <p>Built with sustainability in mind to reduce energy consumption.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-2">Secure</h3>
          <p>Advanced blockchain technology ensures your transactions are safe.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
