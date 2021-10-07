import { Component } from 'react';
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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: usersDB.map((user) => ({ ...user, isSelected: false })) }
  }

  setUsers = (newUsers) => this.setState({ users: newUsers });

  render() {
    const { users } = this.state
    return (
      <>
        {/* <AlohaDashboard /> */}
        <header>
          {<SelectedUserList users={users} />}
        </header>
        <main>
          <UserList users={users} setUsers={this.setUsers} />
        </main>
      </>
    )
  }
}

export default App;
