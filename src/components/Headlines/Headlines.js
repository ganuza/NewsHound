import HeadlineCard from '../HeadlineCard/HeadlineCard'
import PropTypes from 'prop-types'
import './Headlines.css'

const Headlines = ({ headlines, searchTerm }) => {

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
      key={headline.title}
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

Headlines.propTypes = {
  headlines: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    description: PropTypes.string,
    publishedAt: PropTypes.string,
    source: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    }),
    title: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string
  })),
  searchTerm: PropTypes.string
}