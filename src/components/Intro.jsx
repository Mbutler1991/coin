const Intro = () => {
  return (
    <div className=" bg-gray-900">
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="w-full md:w-1/4">
          <img
            src="../images/glitchLeft.png"
            alt="Left Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-6rounded-lg">
          <h3 className="text-2xl holo-text-standard font-bold mb-2 text-center">
            The Meme That Changed Lives
          </h3>
          <p className="text-white text-center">
            Glitch didn’t mean to go viral, but something about the video struck
            a chord. Maybe it was his unbothered vibe, or the simplicity of his
            message. TikTok’s algorithm worked its magic, and within days, “The
            Money Glitch” became a trend. People started reposting his image
            with captions about their financial dreams:
            <ul>
              <li>“Manifesting a raise at work. 4 good fortune.”</li>
              <li>
                “Here’s to finally paying off studentloans. #MoneyGlitch.”
              </li>
              <li>“I’m gonna be rich. Glitch said so.”</li>
            </ul>
            And then, the stories began.
          </p>
        </div>
        <div className="w-full md:w-1/4">
          <img
            src="../images/glitchRight.png"
            alt="Right Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
