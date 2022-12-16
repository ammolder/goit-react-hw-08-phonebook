import styled from 'styled-components';
import { Spinner } from '@chakra-ui/react';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 60px;
`;
export const TitleEl = styled.h2`
  margin-left: 15px;
  font-size: 30px;
  color: ${p => p.theme.colors.title};
`;
export const SpanEl = styled.span`
  margin-left: 80px;
`;
export const SpinnerEl = styled(Spinner)`
  margin-left: 90px;
`;
