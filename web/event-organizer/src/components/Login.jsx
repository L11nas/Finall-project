import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled(Paper)`
  max-width: 300px;
  padding: 90px;
  margin: auto;
  margin-top: 100px;
  background-color: lightblue;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        history('/register'); // Using the history function to navigate
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
          label='User name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
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
