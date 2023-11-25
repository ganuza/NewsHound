import Search from '../Search/Search'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Header.css'

const Header = ({ handleSearchTerm }) => {
  const location = useLocation()

  return (
    <div className='header'>
      <h1>NewsHound</h1>
      {location.pathname === '/' &&
      <Search handleSearchTerm={handleSearchTerm}/>}
      {location.pathname !== '/' &&
      <Link to='/'>HOME</Link>}
    </div>
  )
}

export default Header

Header.propTypes = {
  handleSearchTerm: PropTypes.func
}