// FILE: Blog.jsx
import React from 'react';
import withScrollReveal from '../HOC/withScrollReveal';
import withModal from '../HOC/withModal';
import BlogImage from '../assets/Graph.jpg';
import BlogImage2 from '../assets/Graph1.jpg';

const Blog = () => {
  
  const posts = [
    {
      title: 'First Blog Post',
      excerpt: 'This is the summary of the first blog post.',
      content: 'This is the content of the first blog post.',
      image: BlogImage,
    },
    {
      title: 'Second Blog Post',
      excerpt: 'This is the summary of the second blog post.',
      content: 'This is the content of the second blog post.',
      image: BlogImage2,
    },
    // Add more posts as needed
  ];

  return (
    <section id='blog' className='dark:bg-black dark:text-white bg-slate-50'>
      <div className='p-8 text-center max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold mb-4 text-primary'>Blog</h2>
        <p className='text-gray-600 dark:text-gray-200 max-w-xl mx-auto'>
          Welcome to our blog! Here you will find the latest updates and articles.
        </p>
        <div className='w-full py-12 md:py-24 lg:py-10'>
          <div className='px-4 md:px-6'>
            <div className='grid gap-10 lg:grid-cols-2 items-start'>
              {posts.map((post, index) => (
                <div key={index} className='space-y-4 text-start p-4 bg-white dark:bg-gray-900 rounded-lg shadow dark:shadow-gray-300'>
                  <img src={post.image} alt={post.title} className='w-full h-64 object-cover rounded-md' />
                  <h2 className='text-lg font-bold tracking-tighter sm:text-5xl'>{post.title}</h2>
                  <p className='max-w-[600px] text-gray-500 text-md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                    {post.excerpt}
                  </p>
                  <button className='inline-flex items-center justify-center  bg-primary text-black px-3 py-2 rounded-md'>
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withScrollReveal(withModal(Blog));