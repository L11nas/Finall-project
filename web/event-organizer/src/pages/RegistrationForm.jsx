import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
`;

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // vartotojo sukūrimas
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Vardas'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <TextField
          label='Pavardė'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <TextField
          label='El. paštas'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label='Amžius'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <Button type='submit' variant='contained' color='primary'>
          Registruotis
        </Button>
      </form>
    </FormContainer>
  );
};

export default Form;
