import { useState } from 'react';
import AlohaSortedList from './AlohaSortedList';
import SignUpForm from '../SignUpForm';
export default function AlohaDashboard(props) {
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

  const registerUser = (user) => {
    const newUsersArray = [...users];
    const lastId = newUsersArray.reduce(
      (acc, cur) => (cur.id > acc ? cur.id : acc),
      0
    );
    newUsersArray.push({ ...user, id: lastId + 1 });
    setUsers(newUsersArray);
  };




  return (
    <>
      <AlohaSortedList
        users={users}
        setUsers={setUsers}
        deleteUser={deleteUser}
      />
      <SignUpForm registerUser={registerUser} />
    </>
  );
}
