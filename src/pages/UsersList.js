import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar, Pagination } from '@mui/material';
import config from "../service/config";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);


  useEffect(() => {
    const usersList =  async () => {
      try {
        const response = await fetch(`${config.domain}/users`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUsers([]);
        setLoading(false);
      }
    };
    usersList();
  }, []);


  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);


  return (
    <>
    {loading ? (
      <p>loading...</p>
      ) : ( 
        <Box sx={{
          display: 'flex',
          margin: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
          '& > :not(style)': {
            m: 1,
            width: "50%",
            height: 'auto',
            p: 2
          },
        }}>
          <Paper elevation={3} sx={{alignItems: 'center'}}>
          <List sx={{ width: '100%', maxWidth: 360 }}>
            {currentUsers.map(user => (
                <ListItem key={user.id} component={Link} to={`/user/${user.login}`}>
                  <ListItemAvatar>
                    <Avatar src={user.avatar_url} />
                  </ListItemAvatar>
                  <ListItemText primary={user.login}  />
                </ListItem>
              ))}
          </List>
          <Pagination count={totalPages} page={currentPage} onChange={handlePageChange}/>
        </Paper>
        </Box>
      )
    }
    </>
  );
}