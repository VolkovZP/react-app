import { useState } from 'react';
import './App.css';
import AlohaDashboard from './components/AlohaDashboard';
import AutoCounter from './components/AutoCounter';
import ResponsiveMediaWrapper from './components/ResponsiveMediaWrapper';
import SelectedUserList from './components/SelectedUserList';
import SignUpForm from './components/SignUpForm';
import Timer from './components/Timer';
import UserList from './components/UserList';
import UserLoader from './components/UserLoader';

const usersDB = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
  },
  {
    id: 2,
    firstname: 'Mark',
    lastname: 'Lorem',
  },
  {
    id: 3,
    firstname: 'Anderson',
    lastname: 'Silva',
  },
  {
    id: 4,
    firstname: 'Olga',
    lastname: 'Kurilenko',
  },
];

export default function App(props) {
  const [users, setUsers] = useState(
    usersDB.map(user => ({ ...user, isSelected: false }))
  );
  const [isHidden, setIsHidden] = useState(true);
  const hideHandler = () => setIsHidden(!isHidden);

  const addUser = user => {
    const newUser = [...users];
    const lastId = newUser.reduce(
      (acc, cur) => (cur.id > acc ? cur.id : acc),
      0
    );
    newUser.push({ ...user, id: lastId + 1 });
    setUsers(newUser);
  };

  return (
    <>
      {/* <AlohaDashboard />
      <header>{<SelectedUserList users={users} />}</header>
      <main>
        <button onClick={hideHandler}>hide</button>
        // {isHidden && <UserList users={users} setUsers={setUsers} />}
        <Timer />
        <SignUpForm addUser={addUser} />
        <div style={{ width: '50%' }}>
          <ResponsiveMediaWrapper>
            <img src='https://images4.alphacoders.com/157/157554.jpg' alt='' />
          </ResponsiveMediaWrapper>
        </div>
      </main> */}
      <UserLoader />
    </>
  );
}
