import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'myHooks';
import { Wrapper, TextEl, ButtonEl } from './UseMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <TextEl>Welcome, {user.name}</TextEl>
      <ButtonEl
        colorScheme="teal"
        size="md"
        type="button"
        onClick={handleLogOut}
      >
        Logout
      </ButtonEl>
    </Wrapper>
  );
};
