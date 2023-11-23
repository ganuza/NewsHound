import HeadlineCard from '../HeadlineCard/HeadlineCard'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import './Headlines.css'

const Headlines = ({ headlines, searchTerm }) => {
  console.log('headlines: ', headlines)

  let filteredHeadlines = headlines

  if (searchTerm) {
    filteredHeadlines = headlines.filter((headline) => 
      headline.title.toLowerCase().includes(searchTerm.toLowerCase())
      || headline.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }
  const headlineCards = filteredHeadlines.map((headline, index) => {
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
      {!headlines ? (
        <p>Loading...</p>
      ) : (
        filteredHeadlines.length === 0 ? (
          <h3>We're sorry, no stories match your search.</h3>
        ) : (
      headlineCards))}
    </div>
  )
}

export default Headlines