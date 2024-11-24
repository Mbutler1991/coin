const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-6 text-center animate-fade-in">
      <p>&copy; {new Date().getFullYear()} BrrrCoin. All rights reserved.</p>
      <p className="text-sm mt-2">Follow us on social media for updates!</p>
    </div>
  );
};

export default Footer;
