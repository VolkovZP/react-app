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
import { ThemeContaxt, isAdminContaxt } from '../src/contexts'
import constants from '../src/constants'
import Home from './components/Home'
import onlyAdmin from './components/HOCs';

function App(props) {
  const { THEMES: { DARK, LIGHT } } = constants;

  const isAdmin = false;

  const [theme, setTheme] = useState(LIGHT)

  return (
    <BrowserRouter>
      <ThemeContaxt.Provider value={[theme, setTheme]}>
        <isAdminContaxt.Provider value={isAdmin}>
          <Header />
          <Switch>
            <Route path='/' exact><Home /></Route>
            <Route path='/contacts'><Contacts /></Route>
            <Route path='/about' component={About} />
            <Route path='/admin' component={onlyAdmin(Admin)} />
            <Route path='/timer' component={TimerPage} />
            <Route path='/signform' component={SignUpFormPage} />
            <Route path='/userloader' component={UserLoaderFile} />
            <Route path='/phonesloader' component={PhoneLoader} />
            <Route path='/*' component={Error} />
          </Switch>
        </isAdminContaxt.Provider>
      </ThemeContaxt.Provider>
    </BrowserRouter>
  );
}

const Admin = () => <div>ADMIN PAGE</div>

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



