import { useState } from 'react'
import './Search.css'

const Search = () => {

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <section className='search-container'>
      <input
        type='text'
        name='search'
        placeholder='Search'
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        />


    </section>
  )
}

export default Search