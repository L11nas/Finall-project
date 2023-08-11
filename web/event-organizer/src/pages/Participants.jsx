import React from 'react';
import UsersList from '../components/UsersList'; // Pakeiskite kelią pagal jūsų projekto struktūrą

const ParticipantsPage = () => {
  const users = [
    // Čia turėtų būti jūsų dalyvių duomenys, gauti iš duomenų bazės ar kitur
    // Pvz.:
    // { id: 1, firstName: 'Vardas1', lastName: 'Pavardė1', email: 'email1', birthDate: 'data1' },
    // { id: 2, firstName: 'Vardas2', lastName: 'Pavardė2', email: 'email2', birthDate: 'data2' },
  ];

  return (
    <div>
      <h1>Dalyviai</h1>
      <UsersList users={users} />
    </div>
  );
};

export default ParticipantsPage;
