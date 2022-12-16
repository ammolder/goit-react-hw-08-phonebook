import { NavLink } from 'react-router-dom';
import { Wrapper, ButtonEl } from 'components/AuthNav/AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <ButtonEl colorScheme="teal" size="md">
        <NavLink to="/register">Register</NavLink>
      </ButtonEl>
      <ButtonEl colorScheme="teal" size="md">
        <NavLink to="/login">Login</NavLink>
      </ButtonEl>
    </Wrapper>
  );
};
