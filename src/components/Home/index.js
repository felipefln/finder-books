import React, { useState } from 'react'
import api from '../../services/api'
import logo from '../../assets/logo.png'
import './styles.css'
import Cards from '../Cards'

export default function Home() {
    const [book, setBook] = useState('')
    const [books, setBooks] = useState([])

    async function handleSearch() {
        const response = await api.get(book)
        try {
            setBooks(response.data.items)
        } catch {
            console.log('erro ')
        }
    }
    return (
        <div className="container">
            <div className="logo">
                <img src={logo} alt="logo-books" />
                <p>Books Finder</p>
            </div>
            <div className="container-input">

                <input
                    type="text"
                    value={book}
                    placeholder="Type author, book name, subject..."
                    onChange={e => setBook(e.target.value)}>
                </input>
                <button onClick={handleSearch} className="button">Search</button>
            </div>
            {
                books.length > 1 ? <Cards books={books} /> : <div className="cards-not">Nothing to show...</div>
            }

        </div>
    )
}