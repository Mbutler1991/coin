import { FaTelegramPlane, FaInstagram, FaTiktok } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';

const SocialNavbar = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-gray-800 text-white fixed top-0 left-0 z-50">
      {/* Buy BRRRcoin Button */}
      <button className="floating-button neon-button px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded">
        Buy: $Glitch
      </button>

      {/* Social Links */}
      <div className="flex items-center space-x-4">
        {/* Telegram */}
        <a
          href="https://t.me/ItzaMoneyGlitch"
          target="_blank"
          rel="noopener noreferrer"
          className="icon text-blue-400 hover:text-blue-500"
        >
          <FaTelegramPlane size={30} />
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com/ItzaMoneyGlitch"
          target="_blank"
          rel="noopener noreferrer"
          className="icon text-blue-400 hover:text-blue-500"
        >
          <FaXTwitter size={30} />
        </a>

        {/* Instagram */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="icon text-pink-500 hover:text-pink-600"
        >
          <FaInstagram size={30} />
        </a>

        {/* TikTok */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="icon text-black hover:text-gray-800"
        >
          <FaTiktok size={30} />
        </a>
      </div>
    </div>
  );
};

export default SocialNavbar;