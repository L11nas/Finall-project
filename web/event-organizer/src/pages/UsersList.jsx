import React from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@mui/material';
import styled from 'styled-components';

const UsersTableContainer = styled.div`
  max-width: 600px;
  margin: auto;
`;

const UsersTable = ({ users }) => {
  const handleEdit = (userId) => {
    // vartotojo redagavimas
  };

  const handleDelete = (userId) => {
    // vartotojo ištrynimas
  };

  return (
    <>
      <UsersTableContainer>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Vardas</TableCell>
                <TableCell>Pavardė</TableCell>
                <TableCell>El. paštas</TableCell>
                <TableCell>Gimimo data</TableCell>
                <TableCell>Veiksmai</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.birthDate}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEdit(user.id)}>
                      Redaguoti
                    </Button>
                    <Button onClick={() => handleDelete(user.id)}>
                      Ištrinti
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </UsersTableContainer>
    </>
  );
};

export default UsersTable;
