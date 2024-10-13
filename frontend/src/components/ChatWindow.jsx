import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box, Paper, Typography, Avatar, Grid, useMediaQuery, useTheme } from '@mui/material';

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const chatEndRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // For small screens

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box 
      sx={{ 
        height: isMobile ? '85vh' : '90vh',
        width: isMobile ? '100vw' : '75vw',
        overflowY: 'auto', 
        padding: isMobile ? 1 :2, 
        backgroundColor: '#f5f5f5', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderTopLeftRadius:'8px',
        borderTopRightRadius:'8px',
      }}
    >
      {messages.map((msg) => (
        <Grid 
          container 
          key={msg.id} 
          spacing={isMobile ? 1 : 2} 
          justifyContent={msg.user === 'currentUser' ? 'flex-end' : 'flex-start'}
          sx={{ marginBottom: '8px' }}
        >
          {msg.user !== 'currentUser' && (
            <Grid item>
              <Avatar 
                alt={msg.user} 
                sx={{ width: isMobile ? 32 : 40, height: isMobile ? 32 : 40 }} 
                src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" 
              />
            </Grid>
          )}

          <Grid item xs={8} sm={6} md={5}>
            <Paper 
              sx={{
                padding: isMobile ? 1 : 2, 
                backgroundColor: msg.user === 'currentUser' ? '#1976d2' : '#ffffff', 
                color: msg.user === 'currentUser' ? '#fff' : '#000', 
                borderRadius: msg.user === 'currentUser' ? '16px 16px 0 16px' : '16px 16px 16px 0',
                wordBreak: 'break-word' // Ensures long text wraps in smaller screens
              }}
            >
              <Typography variant="body2" sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                {msg.text}
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  display: 'block', 
                  textAlign: 'right', 
                  mt: 1, 
                  fontSize: isMobile ? '0.7rem' : '0.8rem' 
                }}
              >
                {msg.timestamp}
              </Typography>
            </Paper>
          </Grid>

          {msg.user === 'currentUser' && (
            <Grid item>
              <Avatar 
                alt={msg.user} 
                sx={{ width: isMobile ? 32 : 40, height: isMobile ? 32 : 40 }} 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNACOPVNDkevpOTcgqFaPLW7NI8CWEegTl57294VJep7Fbd4XyAujybBZ3sbCrlVZeuL8&usqp=CAU" 
              />
            </Grid>
          )}
        </Grid>
      ))}
      <div ref={chatEndRef} />
    </Box>
  );
};

export default ChatWindow;
