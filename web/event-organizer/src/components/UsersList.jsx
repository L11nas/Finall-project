import React, { useState, useEffect } from 'react';

import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Button,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import styled from 'styled-components';

const UsersTableContainer = styled.div`
  max-width: 600px;
  margin: auto;
`;

const StyledTableRow = styled(TableRow)`
  td:last-child {
    display: flex;
    gap: 10px;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error retrieving data', error));
  }, []);

  const handleEdit = (userId) => {
    // user editing
  };

  const handleDelete = (userId) => {
    // user delete
  };

  const handleCreate = () => {
    // user create
  };

  return (
    <UsersTableContainer>
      <Button
        variant='contained'
        color='primary'
        startIcon={<AddIcon />}
        onClick={handleCreate}
        style={{ margin: '0 auto 20px', display: 'flex' }}
      >
        Create
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>SURNAME</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>AGE</TableCell>
              <TableCell>ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user.id}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.birthDate}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(user.id)}>Update</Button>
                  <Button onClick={() => handleDelete(user.id)}>Delete</Button>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </UsersTableContainer>
  );
};

export default UsersTable;
