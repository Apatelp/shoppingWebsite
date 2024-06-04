import React from 'react';
import Account from '../components/Account';

const AccountPage = ({ user, onUpdateUser }) => (
  <>
  <h1>Account Page</h1>
  <Account user={user} onUpdateUser={onUpdateUser} />
  </>
);

export default AccountPage;
