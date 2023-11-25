import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import './SelectedArticle.css'

const SelectedArticle = ({ headlines }) => {
  const {title} = useParams()
  console.log('title: ', title)
  console.log('headlines: ', headlines)

  const selectedStory = headlines.find((story) => story.title === title)

  console.log('selectedStory: ', selectedStory)
  return (
    <section className='selected-article-page'>
      <div className='selected-article-cont'>
            <div className='selected-article-details'>
              <h2>{selectedStory.title}</h2>
            <h4>{selectedStory.description}</h4>
            <p>{selectedStory.content}</p>
            <p>Published: {selectedStory.publishedAt.slice(0, 10)} {selectedStory.source.name}</p>
            </div>
            
            <img className='selected-article-image' src={selectedStory.urlToImage}/>
          </div>
    </section>
    
    
  )
}

export default SelectedArticle

SelectedArticle.propTypes = {
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
  }))
}