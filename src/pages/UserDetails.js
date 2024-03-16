import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Box, Paper, Avatar, Typography, Breadcrumbs, Link, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';
import OtherDetails from '../components/OtherDetails';
import config from "../service/config";


const UserDetailsPage = () => {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`${config.domain}/users/${username}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }
        const data = await response.json();
        setUserDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [username]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
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
          <Paper elevation={3}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                User List
              </Link>
              <Typography color="text.primary">{userDetails.name}</Typography>
            </Breadcrumbs>
            <List sx={{ width: '100%', maxWidth: 360}}>
                <ListItem key={userDetails.id} component={Link} to={`/user/${userDetails.login}`}>
                  <ListItemAvatar>
                    <Avatar src={userDetails.avatar_url} style={{height: '50px', width: '50px'}} />
                  </ListItemAvatar>
                  <ListItemText primary={userDetails.login}  />
                </ListItem>
            </List>
            <Divider />
            <OtherDetails details={userDetails}/>
          </Paper>
        </Box>
        
      )}
    </>
  );
};

export default UserDetailsPage;
