import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 20px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleEl = styled.h1`
  font-size: 35px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;
export const TextEl = styled.p`
  font-size: 25px;
  margin-bottom: 25px;
`;
export const LinkEl = styled(Link)`
  font-size: 25px;
  color: purple;
`;
