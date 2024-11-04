import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import withScrollReveal from "../HOC/withScrollReveal";
import Dp from "../assets/love.png";

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    reponsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const TestimonialsData = [
    {
      id: 1,
      name: "John Doe",
      text: "This service is fantastic! Highly recommended.",
      img: Dp,
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "I had a great experience with this company.",
      img: Dp,
    },
    {
      id: 3,
      name: "Alice Johnson",
      text: "Excellent customer support and quality products.",
      img: Dp,
    },
    {
      id: 4,
      name: "Bob Brown",
      text: "I will definitely use their services again.",
      img: Dp,
    },
  ];
  return (
    <div
      id="testimonial"
      className=" py-20 overflow-x-hidden px-7 md:px-0 dark:bg-black bg-white dark:text-white"
    >
      <div className=" max-w-7xl mx-auto items-center text-center">
        {/* Header section */}
        <div className=" text-center mb-10 max-w-[600px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Testimonials
          </h2>
          <p className=" text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
          AfriScale helped us scale our business faster than we ever thought possible!” — CEO, African SME
          </p>
        </div>
        {/* Testimonials */}
        <div>
          <Slider {...settings} className="bg-white dark:bg-black">
            {TestimonialsData.map((data) => {
              return (
                <div className="my-6">
                  <div
                    key={data.id}
                    className="flex flex-col gap-4 shadow-lg py-8 mx-4 rounded-xl dark:bg-gray-500 bg-slate-100 relative"
                  >
                    <div className="mb-4 ml-5">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className=" items-center">
                        <p className="text-xs text-gray-500 dark:text-gray-300 text-start">
                          {data.text}
                        </p>
                        <h1 className="text-xl font-bold text-black/80 dark:text-primary text-start">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-accent text-9xl font-serif absolute top-0 right-0 mr-5">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default withScrollReveal(Testimonial);
