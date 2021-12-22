import styled from 'styled-components';

const Container = styled.div`
  width: 600px;
  height: 600px;
  background: ${({ theme }) => theme.SHADOW};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  color: ${({ theme }) => theme.TEXT};
  background: ${({ theme }) => theme.SHADOW};
  height: 40px;
  font-size: 2rem;
  margin: 1rem;
`;
const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 2rem;
  background: ${({ theme }) => theme.SHADOW};
  color: ${({ theme }) => theme.HIGHTLIGHT};
`;
export { Container, Input, Button };
