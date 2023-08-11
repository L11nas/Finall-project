import React, { useState, useEffect } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
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
  }
  &:hover {
    background-color: #e0e0e0;
  }
`;

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error retrieving data', error));
  }, []);

  const handleSaveEdit = async () => {
    // Implement user update logic here
    try {
      const response = await fetch(
        `http://localhost:8080/users/${editingUserId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedUser),
        }
      );

      if (response.ok) {
        // Update user list with edited user data
        const updatedUsers = users.map((user) =>
          user.id === editingUserId ? { ...user, ...editedUser } : user
        );
        setUsers(updatedUsers);
        setEditingUserId(null);
        setEditedUser({
          first_name: '',
          last_name: '',
          email: '',
          age: '',
        });
      } else {
        console.error('Error updating user');
      }
    } catch (error) {
      console.error('Error during user update', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Filter out the deleted user and update the user list
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
      } else {
        console.error('Error deleting user');
      }
    } catch (error) {
      console.error('Error during user deletion', error);
    }
  };

  const handleCreate = async () => {
    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUser), // Use the editedUser state with new user data
      });

      if (response.ok) {
        const createdUser = await response.json();
        // Add the created user to the user list
        setUsers([...users, createdUser]);
        setEditedUser({
          first_name: '',
          last_name: '',
          email: '',
          age: '',
        });
      } else {
        console.error('Error creating user');
      }
    } catch (error) {
      console.error('Error during user creation', error);
    }
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
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleEdit(user.id)}
                    startIcon={<EditIcon />}
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => handleDelete(user.id)}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
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
