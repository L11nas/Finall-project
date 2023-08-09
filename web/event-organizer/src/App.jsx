import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import AdminLogin from './pages/AdminLogin';
import RegistrationForm from './pages/RegistrationForm';
import UsersList from './pages/UsersList';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path='/login' component={AdminLogin} />
          <Route path='/register' component={RegistrationForm} />
          <Route path='/users' component={UsersList} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
