import React, { useState } from 'react';
import AboutImg from '../assets/about.jpg';
import { Dumbbell, Users, Target } from 'lucide-react';
import withScrollReveal from '../HOC/withScrollReveal';
import withPageTransition from '../HOC/withPageTransition';

const About = () => {
  const [isStoryVisible, setIsStoryVisible] = useState(false);

  const toggleStoryVisibility = () => {
    setIsStoryVisible(!isStoryVisible);
  };

  return (
    <section id='about' className='dark:bg-black dark:text-white bg-slate-50'>
      <div className='p-8 text-center max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold mb-4 text-primary'>About Us</h2>
        <p className='text-gray-600 dark:text-gray-200 max-w-xl mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <div className='w-full py-12 md:py-24 lg:py-10'>
          <div className='px-4 md:px-6'>
            <div className='grid gap-10 lg:grid-cols-2 items-center'>
              <div className='space-y-4 text-start'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>About Afriscale</h2>
                <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  AfriScale Ventures was founded to bridge the gap between potential and growth for African SMEs. With a deep understanding of the African market, we empower small and medium enterprises with the resources and support they need to thrive
                </p>
                <div className='flex flex-col gap-2 min-[400px] md:flex-row'>
                  <button
                    className='inline-flex items-center justify-center bg-black dark:bg-white text-white dark:text-black px-3 py-2 rounded-md'
                    onClick={toggleStoryVisibility}
                  >
                    Our Story
                  </button>
                  <button className='bg-primary text-white px-3 py-2 rounded-md'>What we Offer</button>
                </div>
                {isStoryVisible && (
                  <p className={`mt-4 text-gray-500 transition-opacity duration-500 ${isStoryVisible ? 'opacity-100' : 'opacity-0'}`}>
                    AfriScale Ventures started with a vision to empower African SMEs by providing them with the necessary tools and support to scale and thrive in a competitive market. Our journey began with a small team of dedicated professionals who believed in the potential of African businesses.
                  </p>
                )}
              </div>
              <img
                src={AboutImg}
                alt=""
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
                height="310"
                width="550"
              />
            </div>
            <div className='grid gap-6 lg:grid-cols-3 lg:gap-12 mt-16'>
              <div>
                <div className='flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow dark:shadow-gray-300'>
                  <Dumbbell className='w-12 h-12 text-primary' />
                  <h3 className='text-xl font-bold'>Our Mission</h3>
                  <p className='text-center text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati rem optio fugit sunt distinctio eligendi laborum debitis incidunt aliquid sint voluptates, labore quae voluptatem exercitationem quas ducimus! Aliquam, aperiam?
                  </p>
                </div>
              </div>
              <div>
                <div className='flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow dark:shadow-gray-300'>
                  <Users className='w-12 h-12 text-primary' />
                  <h3 className='text-xl font-bold'>Our Community</h3>
                  <p className='text-center text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati rem optio fugit sunt distinctio eligendi laborum debitis incidunt aliquid sint voluptates, labore quae voluptatem exercitationem quas ducimus! Aliquam, aperiam?
                  </p>
                </div>
              </div>
              <div>
                <div className='flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow dark:shadow-gray-300'>
                  <Target className='w-12 h-12 text-primary' />
                  <h3 className='text-xl font-bold'>Our Mission</h3>
                  <p className='text-center text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati rem optio fugit sunt distinctio eligendi laborum debitis incidunt aliquid sint voluptates, labore quae voluptatem exercitationem quas ducimus! Aliquam, aperiam?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withScrollReveal(About);