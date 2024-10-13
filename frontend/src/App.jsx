import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { receiveMessage } from './redux/chatSlice';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import { Box } from '@mui/material';
import ChatApp from './components/ProfileSection';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const simulateReceiveMessage = () => {
      setTimeout(() => {
        dispatch(receiveMessage('Hello! This is a simulated message.'));
      }, 3000);
    };

    simulateReceiveMessage();
  }, [dispatch]);

  return (
    <Box sx={{height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ChatApp/>
    </Box>
  );
};

export default App;
