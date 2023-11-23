import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './HeadlineCard.css'

const HeadlineCard = ({ source, title, content, description, imgUrl, date }) => {

  return (
    <Link className ='story-link' to={`/story/${title}`}>
      <div className='headlineCard'>
        <h2>{source}</h2>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='headline-img'>
          <img className='headline-card-image' src={imgUrl}/>

        </div>
        <p>Published: {date}</p>
        
      </div>
    </Link>
    
    
  )
}

export default HeadlineCard

HeadlineCard.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  date: PropTypes.string
}