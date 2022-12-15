import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'myHooks';
import { Wrapper, TextEl } from './UseMenu.styled';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <TextEl>Welcome, {user.name}</TextEl>

      <Button color="inherit" type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Wrapper>
  );
};
