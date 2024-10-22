import React from 'react';
import { LoaderContainer, StyledLoader } from './styles';

const Loader = ( { width = '50px', height = '50px', className = '', containerClassName = ''}) => {
  return (
    <LoaderContainer className={containerClassName}>
      <StyledLoader $width={width} $height={height} className={className} />
    </LoaderContainer>
  );
};

export default Loader;