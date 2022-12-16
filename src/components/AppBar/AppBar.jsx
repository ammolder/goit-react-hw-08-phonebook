import * as React from 'react';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UseMenu/UseMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'myHooks';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
