import React, { useState } from 'react';
import { Box, Typography, Avatar, Drawer, List, ListItem, ListItemText, ListItemAvatar, Divider, Grid, Button, useMediaQuery, useTheme } from '@mui/material';
import ChatWindow from './ChatWindow';  // Import the chat window from previous code
import MessageInput from './MessageInput'; // Import the message input component

const contacts = [
  { id: 1, name: 'John Doe', status: 'online', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDV-X4JQ42D1BE148V2p9FuvBV0MvxNN4hA&s' },
  { id: 2, name: 'Jane Smith', status: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s' },
  { id: 3, name: 'Charlie Brown', status: 'online', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3BXbkRoLBHy4QF1iSfpcxysJSattk4Gh_wVB0RerrgfspzdKKm65s0-SegUU6P6XNOo&usqp=CAU' },
  { id: 4, name: 'Lucy Lane', status: 'offline', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTN9azB1ZVn3ZbaDvDZCDaYwPzr23Ih335edTJmx1WEYXjLFAX9H2KWdC_xfrhJuWPAXg&usqp=CAU' }
];

const ProfileSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        flexDirection: isMobile ? 'column' : 'row',
        textAlign: isMobile ? 'center' : 'left',
      }}
    >
      <Avatar
        alt="Current User"
        sx={{ width: isMobile ? 80 : 100, height: isMobile ? 80 : 100, marginBottom: isMobile ? 2 : 0 }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNACOPVNDkevpOTcgqFaPLW7NI8CWEegTl57294VJep7Fbd4XyAujybBZ3sbCrlVZeuL8&usqp=CAU"
      />
      <Box sx={{ marginLeft: isMobile ? 0 : 2 }}>
        <Typography variant="h6" sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
          User
        </Typography>
        <Typography variant="body2" sx={{ color: 'gray', marginTop: 1 }}>
          Status: Active
        </Typography>
      </Box>
    </Box>
  );
};

const Sidebar = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      variant={isMobile ? 'temporary' : 'permanent'} // Collapsible for mobile, permanent for desktop
      sx={{
        width: isMobile ? '80vw' : 300,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isMobile ? '80vw' : 300,
          boxSizing: 'border-box',
        },
      }}
    >
      {/* Profile Section */}
      <ProfileSection />

      {/* Divider */}
      <Divider />

      {/* Contact List */}
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id} button>
            <ListItemAvatar>
              <Avatar alt={contact.name} src={contact.avatar} />
            </ListItemAvatar>
            <ListItemText primary={contact.name} secondary={contact.status} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const ChatApp = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // For controlling sidebar visibility
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Chat Section */}
      <Box sx={{ flexGrow: 1, padding: 2, display: 'flex', flexDirection: 'column', height: '95vh' }}>
        {/* Chat Window */}
        <ChatWindow />

        {/* Message Input */}
        <MessageInput />
      </Box>

      {/* Toggle Sidebar Button for Mobile */}
      {isMobile && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            background:'yellow',
            color:'black',
            fontWeight:'700',
            fontSize:'25px',
            border:'none',
            height:'60px',
            borderBottomRightRadius:'100px'
          }}
        >
          |||||
        </Button>
      )}
    </Box>
  );
};

export default ChatApp;
