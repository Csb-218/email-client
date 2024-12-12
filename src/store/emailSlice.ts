import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Email } from '../types/email';

interface EmailState {
  emails: Email[];
  selectedEmail: string | null;
  readEmails: Email[];
  unReadEmails: Email[];
  filter: 'all' | 'read' | 'unread' | 'favorite';
  currentPage: number;
}

const initialState: EmailState = {
  emails: [],
  selectedEmail: null,
  unReadEmails:[],
  readEmails:[],
  filter: 'all',
  currentPage: 1,
};

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmails: (state, action: PayloadAction<Email[]>) => {
      state.emails = action.payload;
      state.unReadEmails = [...state.unReadEmails , ...action.payload] ;
    },
    selectEmail: (state, action: PayloadAction<string | null>) => {
     
      state.selectedEmail = action.payload;

      const foundEmail:Email = state.emails.find((e) => e.id === action.payload);
      const readEmail:Email = state.readEmails.find((e) => e.id === action.payload);

      if (foundEmail) {
          foundEmail.read = true;
          // add to unread emails
          state.unReadEmails = state.unReadEmails.filter(email => email.id !== foundEmail.id)
          
      }
      if(!readEmail){
        // add to read emails
         state.readEmails = [...state.readEmails,foundEmail]
      } 
    },

    toggleFavorite: (state, action: PayloadAction<string>) => {
      
      const email = state.readEmails.find((e) => e.id === action.payload);
      
      if (email) {
        email.favorite = !email.favorite;
        
        if(!email.favorite) state.selectedEmail = null
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

export const { setEmails, selectEmail, toggleFavorite, setFilter, setPage } =
  emailSlice.actions;
export default emailSlice.reducer;
