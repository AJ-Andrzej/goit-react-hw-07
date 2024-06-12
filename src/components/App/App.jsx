import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import ContactForm from '../ContactForm/ContactForm'
import css from './App.module.css'
import { useEffect, useState } from 'react'


export default function App() {
        
    
    return (
        <div>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm/>
            <SearchBox />
            <ContactList/>
        </div>
    )
}