import Search from '../Search/Search'
import PropTypes from 'prop-types'
import './Header.css'

const Header = ({ handleSearchTerm }) => {

  return (
    <div className='header'>
      <h1>NewsHound</h1>
      <Search handleSearchTerm={handleSearchTerm}/>
    </div>
    
  )
}

export default Header

Header.propTypes = {
  handleSearchTerm: PropTypes.func
}