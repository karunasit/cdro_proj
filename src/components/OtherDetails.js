import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Grid } from '@mui/material';
import {LocationOn, Code, Work, Person, GroupAdd, People} from '@mui/icons-material';


const OtherDetails = (details) => {
  return (
    <>
      <Grid container spacing={2}>
               <Grid item xs={12} md={6}>
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Person />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={details.details.name} secondary="Name" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Work />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={details.details.company} secondary="Company" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <LocationOn />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={details.details.location} secondary="Location" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Code />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={details.details.public_repos} secondary="No of Public Repos" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <GroupAdd />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={details.details.followers} secondary="Followers" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <People />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={details.details.following} secondary="Following" />
                    </ListItem>
                  </List>
                </Grid>
            </Grid>
    </>
  );
};

export default OtherDetails;
