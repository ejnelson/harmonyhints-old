import React from 'react';
import Logo from '../Logo';
import ProfileButton from '../ProfileButton';
import AuthModal from '../AuthModal';

export default HomePage => (
  <div>
    <Logo />
    <AuthModal />
    <ProfileButton />
  </div>
);
