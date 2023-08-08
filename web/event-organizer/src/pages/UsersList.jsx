import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import styled from 'styled-components';

const StyledList = styled(List)`
  background-color: #f0f0f0;
`;

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/registration-service/users') // Pakeiskite į '/api/users'
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>Vartotojų sąrašas</h1>
      <StyledList>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={`${user.first_name} ${user.last_name}`} />
          </ListItem>
        ))}
      </StyledList>
    </div>
  );
}

export default UsersList;
