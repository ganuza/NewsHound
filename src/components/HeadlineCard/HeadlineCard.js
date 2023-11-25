import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './HeadlineCard.css'

const HeadlineCard = ({ source, title, imgUrl, date }) => {

  return (
    <Link className ='story-link' to={`/story/${title}`}>
      <div className='headline-card'>
        <div className='story-details'>
          <h2>{source}</h2>
          <h2>{title}</h2> 
          <p>Published: {date}</p>
          <img className='headline-card-image' src={imgUrl} alt={title}/>
        </div>     
      </div>
    </Link>   
  )
}

export default HeadlineCard

HeadlineCard.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  date: PropTypes.string
}