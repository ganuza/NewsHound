import { useParams } from 'react-router-dom'
import './SelectedArticle.css'

const SelectedArticle = ({ headlines }) => {
  const {title} = useParams()
  console.log('title: ', title)
  console.log('headlines: ', headlines)

  const selectedStory = headlines.find((story) => story.title === title)

  console.log('selectedStory: ', selectedStory)
  return (
    <div className='selected-article-cont'>
      <h2>Hello from SelectedArticle</h2>
      <h2>{selectedStory.title}</h2>
      <img src={selectedStory.urlToImage}/>
      <h3>{selectedStory.publishedAt.slice(0, 10)}</h3>
      <p>{selectedStory.content}</p>
      <p>{selectedStory.source.name}</p>
    </div>
    
  )
}

export default SelectedArticle