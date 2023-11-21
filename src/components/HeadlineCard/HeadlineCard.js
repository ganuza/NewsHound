import { Link } from 'react-router-dom'
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