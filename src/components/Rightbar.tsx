import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

const RightbarContainer = styled(Box)({
  width: 300,
  padding: '20px',
  borderLeft: '1px solid #ddd',
});

const friends = [
  { name: 'Alice', avatar: 'https://via.placeholder.com/40' },
  { name: 'Bob', avatar: 'https://via.placeholder.com/40' },
  { name: 'Charlie', avatar: 'https://via.placeholder.com/40' },
];

const Rightbar: React.FC = () => {
  return (
    <RightbarContainer>
      <Typography variant="h6" gutterBottom>
        Online Friends
      </Typography>
      <List>
        {friends.map((friend, index) => (
          <ListItem key={index}>
            <Avatar src={friend.avatar} />
            <ListItemText primary={friend.name} />
          </ListItem>
        ))}
      </List>
    </RightbarContainer>
  );
};

export default Rightbar;
