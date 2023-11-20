import './HeadlineCard.css'

const HeadlineCard = ({ source, title, content, description, imgUrl, date }) => {

  return (
    <div className='headlineCard'>
      <h2>{source}</h2>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className='headline-img'>
        <img className='headline-card-image' src={imgUrl}/>

      </div>
      <p>Published: {date}</p>
      
    </div>
    
  )
}

export default HeadlineCard