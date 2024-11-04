// withPageTransition.jsx
import React from 'react';
import { motion } from 'framer-motion';

const withPageTransition = (WrappedComponent) => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.9 } },
  };

  return (props) => (
    <motion.div initial="initial" animate="animate" variants={pageVariants}>
      <WrappedComponent {...props} />
    </motion.div>
  );
};

export default withPageTransition;