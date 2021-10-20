import { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import TimerPage from './pages/TimerPage'
import SignUpFormPage from './pages/SignUpFormPage'
import UserLoaderFile from './components/UserLoaderFile';
import PhoneLoader from './components/PhoneLoader';
import Tree from './components/Tree';
import { UserContext } from '../src/contexts'

const user = 'John Doe'

function App(props) {
  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <Header />
        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/contacts'><Contacts /></Route>
          <Route path='/about' component={About} />
          <Route path='/timer' component={TimerPage} />
          <Route path='/signform' component={SignUpFormPage} />
          <Route path='/userloader' component={UserLoaderFile} />
          <Route path='/phonesloader' component={PhoneLoader} />
          <Route path='/*' component={Error} />
        </Switch>
        <Tree />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

const Home = () => <div>HOME</div>
const Contacts = () => <div>contact</div>
const About = (props) => {
  console.log(props)
  setTimeout(() => {
    props.history.push('/');
  }, 3000)
  return <div>About</div>;
}
const Error = (props) => {
  return <div>ERROR 404...PAGE NOT FOUND.</div>
}
export default App;



