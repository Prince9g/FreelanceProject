import React from "react";
import Services from "./Services";
import { HeroSection } from "./HeroSection";
import image1 from "../assets/pb3.jpeg";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const onButtonClickHandler = () => {
    // Handle button click event
    navigate("/servicepage");
  };
  const onknowMorebuttonHandler = () => {
    // Handle button click event
    navigate("/about");
  }

  return (
    <div>
      <div className="relative">
        <HeroSection className="absolute" />
        <div className="max-w-lg md:space-y-5 md:mt-20 absolute bottom-1/4 left-[20px] md:top-1/4 md:left-1/4 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          <p className="text-yellow-500 font-bold text-xl md:text-2xl">
            WE HELP YOU
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-neutral-50">
            Sell <span className="text-neutral-50">Your Stunning Products</span>
          </h2>
          <p className="text-emerald-400 text-md md:text-2xl md:mt-3 text-semibold">
            We can Help you through our unique Servies.
          </p>
          <button
            className="hidden mt-6 bg-purple-600 text-white px-6 py-3 rounded-full md:flex items-center gap-2 hover:bg-purple-700"
            onClick={onButtonClickHandler}
          >
            MORE DETAILS <span>→</span>
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="flex justify-center items-center md:hidden w-[80%] bg-purple-600 text-white px-6 py-3 rounded-full gap-2 hover:bg-purple-700"
          onClick={onButtonClickHandler}
        >
          MORE DETAILS <span>→</span>
        </button>
      </div>


      {/* services section  */}
      <div>
      <h1 className="text-3xl md:text-4xl font-semibold text-center mt-8 mb-4 md:mt-8 md:mb-10">
        ~Our Services~
      </h1>
      <Services />
      <div className="flex justify-center">
            <button
              className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-700"
              onClick={onknowMorebuttonHandler}
            >
              EXPLORE ALL SERVICES <span>→</span>
            </button>
          </div>
      </div>

      

      {/* aboutus section  */}
      <div className="md:flex justify-between items-start p-10 bg-white gap-40">
        <div className="flex flex-col items-start text-justify md:ml-8 md:my-24 md:w-[75%]">
          <h1 className="font-semibold text-2xl mb-5">About Our Company</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            velit auctor, semper mauris a, congue lectus. Donec vel orci vel
            arcu fermentum commodo. Donec vel ligula vel arcu hendrerit feugiat.
            Nulla facilisi. Donec sagittis, metus a consectetur consectetur,
            mauris velit volutpat justo, vel pulvinar velit lectus vel nunc.
            Donec ultricies orci id neque placerat, vel posuere mauris
          </p>
          <div>
            <button
              className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-700"
              onClick={onknowMorebuttonHandler}
            >
              KNOW MORE <span>→</span>
            </button>
          </div>
        </div>
        <div className="w-full h-[100%] mt-8 md:mt-0">
          <img src={image1} className="w-[100%] h-[90%] rounded-xl" />
        </div>
      </div>

      {/* animation section  */}
      <div className="mt-6 md:mt-16 md:mb-4 w-full overflow-hidden whitespace-nowrap  text-black py-2">
      <div className="text-3xl md:text-4xl inline-block  animate-[marquee_15s_linear_infinite] font-semibold">
        🚀 ContactUs for More Services & Updates 🚀 Stay In Touch 🚀 Stay Tuned 🚀ContactUs for More Services & Updates 🚀 Stay In Touch 🚀 Stay Tuned 🚀 ContactUs for More Services & Updates 🚀 Stay In Touch 🚀 Stay Tuned 🚀ContactUs for More Services & Updates 🚀 Stay In Touch 🚀 Stay Tuned 
      </div>
    </div>
      
    </div>
  );
};

export default Home;