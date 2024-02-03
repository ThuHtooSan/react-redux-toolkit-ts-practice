import { useEffect } from 'react';
import { fetchUsers } from './userSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const UserView = () => {
  const user = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h2>List of users</h2>
      {!!user.users.length &&
        user.users.map(user => <li key={user.id}>{user.name}</li>)}
      {user.loading && <p>Loading...</p>}
      {!!user.error && <p>{user.error}</p>}
    </>
  );
};

export default UserView;
