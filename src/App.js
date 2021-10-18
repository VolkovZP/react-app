import { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';


function App(props) {

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/' exact><Home /></Route>
        <Route path='/contacts'><Contacts /></Route>
        <Route path='/about' component={About} />
        <Route path='/*' component={Error} />
      </Switch>
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