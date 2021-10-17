import { useState } from 'react';
import AlohaSortedList from './AlohaSortedList';

export default function AlohaDashboard (props) {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'bob svaget',
    },
    {
      id: 2,
      name: 'li kurasava',
    },
  ]);

  const deleteUser = userId =>
    setUsers(users.filter(item => item.id !== userId));

  return (
    <>
      <AlohaSortedList
        users={users}
        setUsers={setUsers}
        deleteUser={deleteUser}
      />
    </>
  );
}
