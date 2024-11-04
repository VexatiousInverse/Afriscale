import React from 'react';
import { motion } from 'framer-motion';

const withScrollReveal = (WrappedComponent) => {
  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (props) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      <WrappedComponent {...props} />
    </motion.div>
  );
};

export default withScrollReveal;