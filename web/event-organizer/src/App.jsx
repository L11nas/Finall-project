import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import UsersList from './pages/UsersList'; // Pakeiskite kelią atitinkamai
import RegistrationForm from './pages/RegistrationForm'; // Pakeiskite kelią atitinkamai

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Vartotojų sąrašas</Link>
          </li>
          <li>
            <Link to='/register'>Registracija</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/' exact component={UsersList} />
        <Route path='/register' component={RegistrationForm} />
      </Switch>
    </Router>
  );
}

export default App;
