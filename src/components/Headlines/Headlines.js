import HeadlineCard from '../HeadlineCard/HeadlineCard'
import './Headlines.css'

const Headlines = ({ headlines }) => {
  console.log('headlines: ', headlines)
  const headlineCards = headlines.map((headline, index) => {
    return <HeadlineCard
      id={index}
      key={index}
      source={headline.source.name}
      title={headline.title}
      description={headline.description}
      imgUrl={headline.urlToImage}
      content={headline.content}
      date={headline.publishedAt.slice(0, 10)}
    />
  })

  return (
    <div className='headlines-cont'>
      {headlineCards}
    </div>
    
  )
}

export default Headlines