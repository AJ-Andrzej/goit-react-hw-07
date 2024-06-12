import { createSlice } from "@reduxjs/toolkit";
import initialContacs from '../initialContacs.json'
import { nanoid } from "nanoid";


const slice = createSlice({
    name: 'contacts',
    initialState: { items: initialContacs },
    reducers: {
        addContact: {
            reducer(state, action) {
            state.items.push(action.payload)
            },
            prepare(newContact) {
                return {
                    payload: {
                        id: nanoid(),
                        ...newContact,
                    }
                }
            }
        },
        deleteContact(state, action) {
            const index = state.items.findIndex((contact) => contact.id === action.payload);
            state.items.splice(index, 1)
        }

    }
})

export const { addContact, deleteContact } = slice.actions;
export const selectContacts = state => state.contacts.items;
export default slice.reducer;