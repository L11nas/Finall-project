import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Paper } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled(Paper)`
  max-width: 300px;
  padding: 90px;
  margin: auto;
  margin-top: 100px;
  background-color: #2596be;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('api/login', {
        username,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        // Store the token in localStorage or a global state management solution
        localStorage.setItem('token', token);
        history('/users'); // Redirect to dashboard or other route
      } else {
        console.error('Invalid login data');
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  };

  return (
    <FormContainer elevation={3}>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        <TextField
          label='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          style={{ margin: '20px auto 0' }}
        >
          Login
        </Button>
      </form>
    </FormContainer>
  );
};

export default Login;
