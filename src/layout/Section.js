import React from 'react';
import Container from './Container';

const Section = ({ 
  children, 
  id, 
  className = '', 
  containerClassName = '',
  background = 'white' 
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    'kawai-sand': 'bg-gradient-to-br from-kawai-sand to-white',
    'kawai-blue': 'bg-gradient-to-br from-kawai-blue/5 to-kawai-sand',
    'kawai-warm': 'bg-gradient-to-br from-kawai-warm/5 to-white'
  };

  return (
    <section 
      id={id} 
      className={`py-16 ${backgroundClasses[background]} ${className}`}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section; 