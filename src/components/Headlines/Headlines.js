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
    />
  })

  return (
    <div>
      {headlineCards}
    </div>
    
  )
}

export default Headlines