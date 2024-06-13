import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './contactsOps'
import {selectFilter} from './filtersSlice'

const handlePending = (state) => {
    state.loading = true;
    state.error = null;
}
    
const  handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
    }

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                // state.loading = false;                
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload)
                
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(contact => contact.id !== action.payload.id)
                
            })
            .addCase(deleteContact.rejected, handleRejected)
    },
})


export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector([selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
})

export default slice.reducer;
