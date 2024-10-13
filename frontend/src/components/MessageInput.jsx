import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../redux/chatSlice';
import { Box, TextField, Button, useMediaQuery, useTheme } from '@mui/material';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // For smaller screens

  const handleSend = () => {
    if (message.trim()) {
      dispatch(sendMessage(message));
      setMessage('');
    }
  };

  return (
    <Box 
      sx={{ 
        width: isMobile ?'100vw'  : '75vw',
        display: 'flex', 
        alignItems: 'center', 
        padding: isMobile ? '8px' : '16px', 
        backgroundColor: 'white', 
        borderTop: '1px solid #e0e0e0',
        justifyContent: isMobile ? 'space-around' :'space-between',
        borderBottomLeftRadius:'8px',
        borderBottomRightRadius:'8px',
      }}
    >
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        variant="outlined"
        placeholder="Type your message..."
        sx={{ 
          marginRight: '8px', 
          backgroundColor: '#f5f5f5', 
          borderRadius: '8px', 
          fontSize: isMobile ? '0.9rem' : '1rem' 
        }}
      />
      <Button 
        onClick={handleSend} 
        variant="contained" 
        color="primary" 
        sx={{ 
          padding: isMobile ? '8px 12px' : '12px 24px', 
          textTransform: 'none', 
          fontSize: isMobile ? '0.8rem' : '1rem' 
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
