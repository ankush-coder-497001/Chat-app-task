import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  user: 'currentUser', // Mock current user
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        id: Date.now(),
        user: state.user,
        text: action.payload,
        timestamp: new Date().toLocaleTimeString(),
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push({
        id: Date.now(),
        user: 'otherUser',
        text: action.payload,
        timestamp: new Date().toLocaleTimeString(),
      });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
