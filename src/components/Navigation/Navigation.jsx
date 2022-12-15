import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useAuth } from 'myHooks';
import { NavEl } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavEl>
      <NavLink to="/">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phone book
          </Typography>
        </NavLink>
      )}
    </NavEl>
  );
};
