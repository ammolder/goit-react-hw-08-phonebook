import { NavLink } from 'react-router-dom';
import { useAuth } from 'myHooks';
import { ButtonEl } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <ButtonEl colorScheme="pink">
        <NavLink to="/">Home</NavLink>
      </ButtonEl>
      {isLoggedIn && (
        <ButtonEl colorScheme="pink">
          <NavLink to="/contacts">Phone book</NavLink>
        </ButtonEl>
      )}
    </nav>
  );
};
