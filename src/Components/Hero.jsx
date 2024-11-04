import React from "react";
import LogoImg from "../assets/dark.png";
import withPageTransition from "../HOC/withPageTransition";

const BgStyle = {
  backgroundImage: `url(${LogoImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  return (
    <div id="#home" style={BgStyle} className="dark:bg-black dark:text-white">
      <div className="bg-white/10 dark:bg-black/80">
        <div className="max-w-7xl mx-auto h-[100vh] md:min-h-[620px] flex items-center">
          <div className="md:w-1/2 w-full pl-5 md:pl-0 space-y-5">
          <p className=" text-white text-lg md:text-2xl">
            Afriscale
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-accent">
          Empowering African SMEs to Scale and Thrive
          </h1>
          <p className="mr-24 text-white">
          AfriScale Ventures provides strategic solutions to accelerate growth, sustainability, and digital transformation for African small and medium enterprises.
          </p>
          <button className="bg-primary text-black px-3 py-2 rounded-md"><a href="#about">Learn More</a></button>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default withPageTransition(Hero);
