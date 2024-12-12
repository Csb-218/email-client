import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Email } from '../types/email';

interface EmailState {
  emails: Email[];
  selectedEmail: Email;
  favouritedEmails:Email[],
  readEmails:Email[],
  filter: 'all' | 'read' | 'unread' | 'favorite';
  currentPage: number;
}

const initialState: EmailState = {
  emails: [],
  selectedEmail: null,
  filter: 'all',
  favouritedEmails:[],
  readEmails:[],
  currentPage: 1,
};

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmails: (state, action: PayloadAction<Email[]>) => {
      state.emails = [...action.payload];
    },
    selectEmail: (state, action: PayloadAction<Email>) => {
      state.selectedEmail = action.payload;
      state.readEmails = [...state.readEmails,action.payload];
      // const email = state.emails.find((e) => e.id === action.payload);
      // if (email) {
      //   email.read = true;
      // }
    },
    toggleFavorite: (state, action: PayloadAction<Email>) => {
      const email = state.emails.find((e) => e.id === action.payload.id);
      if (email) {
        // email.favorite = !email.favorite;
        state.favouritedEmails.push(email)
      }
      else {
        state.favouritedEmails.filter(email => email.id !== action.payload.id )
      }
    },
    setFilter: (
      state,
      action: PayloadAction<'all' | 'read' | 'unread' | 'favorite'>
    ) => {
      state.filter = action.payload;
      state.selectedEmail = null;

    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      state.selectedEmail = null;
    },
  },
});

export const { setEmails, selectEmail, toggleFavorite, setFilter, setPage } = emailSlice.actions;
export default emailSlice.reducer;
