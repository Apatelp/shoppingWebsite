import React from 'react';
import Account from '../components/Account';

const AccountPage = ({ user, onUpdateUser }) => (
  <Account user={user} onUpdateUser={onUpdateUser} />
);

export default AccountPage;
