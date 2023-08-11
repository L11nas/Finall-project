import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
  text-align: center;
`;

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      age: age,
    };

    try {
      const response = await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('successfully registered:', result);
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error executing request:', error);
    }
  };

  return (
    <FormContainer>
      <h4>REGISTRACIJOS FORMA</h4>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <TextField
          label='Surname'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <TextField
          label='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label='Age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          style={{ margin: '20px auto 0' }}
        >
          Register
        </Button>
      </form>
    </FormContainer>
  );
};

export default Form;
