import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import withScrollReveal from "../HOC/withScrollReveal";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="bg-gray-100 dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto items-center flex flex-col py-8 md:px-8 min-h-screen">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center px-6 max-w-xl mb-12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          consectetur voluptas repellat architecto, non dolores magnam quae in,
          et vel odio possimus consequuntur, eaque eius sunt! Eligendi
          perferendis libero consequuntur?
        </p>
        <div className="grid md:grid-flow-col gap-10">
          {/* Contact form */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 md:p-12 max-w-xl md:w-[400px]">
            <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-3 block w-full border border-gray-300 dark:bg-black rounded-md shadow-sm sm:text-sm"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-3 block w-full border border-gray-300 dark:bg-black rounded-md shadow-sm sm:text-sm"
                  placeholder="example@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="mt-1 p-3 block w-full border border-gray-300 dark:bg-black rounded-md shadow-sm sm:text-sm"
                  placeholder="Your message here..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-3 bg-primary dark:text-white text-white py-2 px-4 rounded shadow-md hover:bg-success transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Location */}
          <div className="bg-white dark:bg-[#28282B] shadow-lg rounded-lg p-8 md:p-12 max-w-3xl w-full flex flex-col items-center md:flex-row gap-7 space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Our Location
              </h3>
              <div className="text-gray-600 dark:text-gray-300 flex gap-2 items-center">
                <MapPin className="text-primary" />
                <p>1234 Street Name, City Name, United States</p>
              </div>
              <div className="flex gap-2 items-center mt-4">
                <Phone className="text-primary" />
                <p className="text-gray-600 dark:text-gray-300">
                  +123 456 7890
                </p>
              </div>
            </div>
            <div className="w-full h-64 bg-gray-300 rounded-lg">
              <iframe
                title="map"
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.320576134122!2d-73.9848426845937!3d40.75889597932583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f4d1e0e5bf%3A0x8a3f2d3c9f6c1b4f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sbd!4v1631052902622!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withScrollReveal(Contact);