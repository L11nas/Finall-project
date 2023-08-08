import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = () => {
    // Siųsti POST užklausą į /registration-service/users su įvestais duomenimis
    // Ši dalis turi būti užpildyta
  };

  return (
    <div>
      <h1>Registracijos forma</h1>
      <TextField
        label='Vardas'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      {/* Kitos įvestys */}
      <Button variant='contained' onClick={handleSubmit}>
        Registruoti
      </Button>
    </div>
  );
}

export default RegistrationForm;
