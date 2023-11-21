import { useParams } from 'react-router-dom'
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
            
            <h3>{selectedStory.publishedAt.slice(0, 10)}</h3>
            <p>{selectedStory.content}</p>
            <p>{selectedStory.source.name}</p>
            </div>
            
            <img className='selected-article-image' src={selectedStory.urlToImage}/>
          </div>
    </section>
    
    
  )
}

export default SelectedArticle