import { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ handleSearchTerm }) => {

  const [searchWord, setSearchWord] = useState('')

  const submitSearch = (event) => {
    event.preventDefault()
    
    setSearchWord(event.target.value)
    handleSearchTerm(event.target.value)
  }
    
  return (
    <section className='search-container'>
      <input
        type='text'
        name='search'
        placeholder='Search'
        value={searchWord}
        onChange={event => submitSearch(event)}
        />
    </section>
  )
}

export default Search

Search.propTypes = {
  handleSearchTerm: PropTypes.func
}