import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts, addContact, deleteContact} from './contactsOps'



const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload)
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(contact => contact.id !== action.payload.id)
            })
    },
})


export const selectContacts = state => state.contacts.items;
export default slice.reducer;