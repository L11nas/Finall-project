import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GlobalStyles from '../../GlobalStyles';
const UsersContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 20px;
`;
const UserDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0;
  margin: 10px 0;
`;

const UserDetail = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FieldName = styled.span`
  font-weight: bold;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
`;

const UserListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  width: 120px;
  margin-bottom: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003c80;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Align buttons to the right */
  gap: 5px;
  margin-top: 10px;
`;
const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
  });
  const [updatedUser, setUpdatedUser] = useState({
    id: null,
    first_name: '',
    last_name: '',
    email: '',
    age: '',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/users',
        newUser
      );
      if (response.status === 200) {
        // Create a new user object with input values
        const newUserObject = {
          id: response.data.id, // Assuming your response contains the new user's ID
          first_name: newUser.first_name,
          last_name: newUser.last_name,
          email: newUser.email,
          age: newUser.age,
        };
        setUsers([response.data, ...users]);
        // Add the new user object to the list

        // Reset the input fields
        setNewUser({
          first_name: '',
          last_name: '',
          email: '',
          age: '',
        });
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handleUpdatedUserChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleUpdate = (userId) => {
    const userToUpdate = users.find((user) => user.id === userId);
    if (userToUpdate) {
      setUpdatedUser(userToUpdate);
    }
  };

  const handleSaveUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/${updatedUser.id}`,
        updatedUser
      );

      // Handle response and update the user list if needed

      // Clear the updatedUser state
      setUpdatedUser({
        id: null,
        first_name: '',
        last_name: '',
        email: '',
        age: '',
      });
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <UsersContainer>
      <div>
        <h1>Add New User</h1>
        <input
          type='text'
          name='first_name'
          placeholder='First Name'
          value={newUser.first_name}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='last_name'
          placeholder='Last Name'
          value={newUser.last_name}
          onChange={handleInputChange}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={newUser.email}
          onChange={handleInputChange}
        />
        <input
          type='number'
          name='age'
          placeholder='Age'
          value={newUser.age}
          onChange={handleInputChange}
        />
        <Button type='button' onClick={handleCreate}>
          Add User
        </Button>
      </div>

      <h2>User List</h2>
      <UserList>
        {users.map((user) => (
          <UserListItem key={user.id}>
            <UserDetails>
              <UserDetail>
                <FieldName>First Name:</FieldName>
                <input
                  type='text'
                  name='first_name'
                  placeholder=''
                  value={user.first_name}
                  onChange={(event) => handleInputChange(event, user.id)}
                />
              </UserDetail>
              <UserDetail>
                <FieldName>Last Name:</FieldName>
                <input
                  type='text'
                  name='last_name'
                  placeholder=''
                  value={user.last_name}
                  onChange={(event) => handleInputChange(event, user.id)}
                />
              </UserDetail>
              <UserDetail>
                <FieldName>Email:</FieldName>
                <input
                  type='email'
                  name='email'
                  placeholder=''
                  value={user.email}
                  onChange={(event) => handleInputChange(event, user.id)}
                />
              </UserDetail>
              <UserDetail>
                <FieldName>Age:</FieldName>
                <input
                  type='number'
                  name='age'
                  placeholder=''
                  value={user.age}
                  onChange={(event) => handleInputChange(event, user.id)}
                />
              </UserDetail>
            </UserDetails>
            <ButtonContainer>
              <div>
                <Button onClick={() => handleDelete(user.id)}>Delete</Button>
                <Button onClick={() => handleUpdate(user.id)}>Update</Button>
              </div>
            </ButtonContainer>
          </UserListItem>
        ))}
      </UserList>

      {updatedUser.id && (
        <div>
          <h2>Edit User</h2>
          <input
            type='text'
            name='first_name'
            placeholder='First Name'
            value={updatedUser.first_name}
            onChange={handleUpdatedUserChange}
          />
          <input
            type='text'
            name='last_name'
            placeholder='Last Name'
            value={updatedUser.last_name}
            onChange={handleUpdatedUserChange}
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={updatedUser.email}
            onChange={handleUpdatedUserChange}
          />
          <input
            type='number'
            name='age'
            placeholder='Age'
            value={updatedUser.age}
            onChange={handleUpdatedUserChange}
          />
          <Button onClick={handleSaveUpdate}>Save</Button>
        </div>
      )}
    </UsersContainer>
  );
};

export default UsersPage;
