import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';
import styled from 'styled-components';

const FormContainer = styled(Paper)`
  max-width: 300px;
  padding: 20px;
  margin: auto;
  margin-top: 100px;
`;

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //prisijungimo logiką
  };

  return (
    <FormContainer elevation={3}>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Vartotojo vardas'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label='Slaptažodis'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
        <Button type='submit' variant='contained' color='primary' fullWidth>
          Prisijungti
        </Button>
      </form>
    </FormContainer>
  );
};

export default AdminLogin;
