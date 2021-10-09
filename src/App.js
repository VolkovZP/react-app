import { useState } from 'react';
import './App.css';
import AlohaDashboard from './components/AlohaDashboard';
import SelectedUserList from './components/SelectedUserList';
import UserList from './components/UserList';

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
]



export default function App(props) {

  const [users, setUsers] = useState(usersDB.map((user) => ({ ...user, isSelected: false })));
  const [isHidden, setIsHidden] = useState(true);
  const hideHandler = () => setIsHidden(!isHidden);

  return (
    <>
      {/* <AlohaDashboard /> */}
      <header>
        {<SelectedUserList users={users} />}
      </header>
      <main>
        <button onClick={hideHandler}>hide</button>
        {isHidden && <UserList users={users} setUsers={setUsers} />}
      </main>
    </>
  )
}
