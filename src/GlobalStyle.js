import styled, { createGlobalStyle } from 'styled-components';

const GlobaleStyle = createGlobalStyle`
    *, ::before, ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export default GlobaleStyle;

// const Wrapper = styled.div``;
// const Button = styled.button``;
// const OutlineButton = styled.button``;

// export { Wrapper, Button, OutlineButton };

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;

  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }

  @media (min-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : '20px')};
  background-color: ${({ primary }) => (primary ? '#E38B06' : '#000')};
  color: ${({ primary }) => (primary ? '#000' : '#fff')};
  padding: ${({ big }) => (big ? '18px 30px' : '10px 28px')};
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '18px')};
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#fff' : '#E38B06')};
    transform: translateY(-0.5rem) scale(1.02);
    color: #000;
  }
  &:active {
    transform: translateY(0.5rem);
  }

  @media only screen and (max-width: 1000px) {
    /* width: 100%; */
    padding: ${({ big }) => (big ? '18px 30px' : '10px 20px')};
  }
  @media only screen and (max-width: 375px) {
    padding: ${({ big }) => (big ? '12px 20px' : '10px 20px')};
    font-size: ${({ bigFont }) => (bigFont ? '16px' : '18px')};
  }
`;

export const OutlineButton = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? '40px' : '30px')};
  border: 2px solid ${({ theme }) => theme.HIGHLIGHT};
  color: ${({ theme }) => theme.TEXT};
  outline: none;
  padding: ${({ big }) => (big ? '15px 60px' : '13px 55px')};
  font-size: ${({ fontBig }) => (fontBig ? '22px' : '18px')};
  transition: all 0.5s ease;
  background-color: ${({ theme }) => theme.BACKGROUND};

  &:hover {
    background-color: #333;
    color: #fff;
    border: none;
    transform: translateY(-0.5rem) scale(1.02);
  }
  &:active {
    transform: translateY(0.5rem);
  }

  @media only screen and (max-width: 1200px) {
    border-radius: ${({ bigRadius }) => (bigRadius ? '20px' : '18px')};
    padding: ${({ big }) => (big ? '9px 30px' : '8px 28px')};
    font-size: ${({ fontBig }) => (fontBig ? '18px' : '16px')};
  }
`;
