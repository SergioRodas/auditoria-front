import styled, { keyframes } from 'styled-components';

interface StyledLoaderProps {
    $width: string;
    $height: string;
  }
  
  const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;
  
  export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `;
  
  export const StyledLoader = styled.div<StyledLoaderProps>`
    border: 4px solid #f3f3f3; 
    border-top: 4px solid #3498db; 
    border-radius: 50%; 
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    animation: ${spin} 2s linear infinite; 
  `;
