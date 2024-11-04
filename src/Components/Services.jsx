import React from "react";
import BannerImg from "../assets/Dark.png";
import { User,Brain, Rotate3D, PlugZap2 } from "lucide-react";
import withScrollReveal from "../HOC/withScrollReveal";

const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Services = () => {
  const servicesJson = [
    {
      title: "Lean Thinking",
      description: "Streamline operations and increase efficiency with tailored lean methodologies",
      icon: Brain,
    },
    {
      title: "Digital Transformation",
      description: "Enhance your digital presence and adopt modern technology for long-term growth.",
      icon: Rotate3D,
    },
    {
      title: "Sustainability & Resilience",
      description: "Comprehensive health and wellness programs to keep you fit.",
      icon:PlugZap2,
    },
    {
      title: "Nutrition Guidance",
      description: "Expert nutrition advice to complement your fitness regime.",
      icon: User,
    },
    {
      title: "Nutrition Guidance",
      description: "Expert nutrition advice to complement your fitness regime.",
      icon: User,
    },
    {
      title: "Nutrition Guidance",
      description: "Expert nutrition advice to complement your fitness regime.",
      icon: User,
    },
    {
      title: "Nutrition Guidance",
      description: "Expert nutrition advice to complement your fitness regime.",
      icon: User,
    },
  ];

  return (
    <div
      id="service"
      style={BgStyle}
      className=" dark:bg-black dark:text-white"
    >
      <div className=" bg-white/10 dark:bg-black/60 px-6 md:px-0">
        <div className=" max-w-7xl mx-auto min-h-[620px] flex items-center ">
          <div className="md:w-1/2 w-full mx-auto space-y-5">
            <h1 className=" text-primary font-bold text-4xl text-center mb-12">
              Our Services
            </h1>
            <div className=" grid grid-cols-2 gap-7 ">
              {servicesJson.map((service) => {
                return (
                  <div>
                    <div className="flex flex-col md:flex-row gap-4 items-center text-center md:text-start">
                      <div className="w-12 h-1/2 bg-slate-100 dark:bg-[#28282B] text-accent rounded-full flex items-center justify-center md:mb-4">
                        <service.icon className="w-6 h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1 ">
                        <h3 className="text-xl font-semibold text-primary">
                          {service.title}
                        </h3>
                        <p className=" text-white text-sm dark:text-gray-400 mt-2">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default withScrollReveal(Services);
