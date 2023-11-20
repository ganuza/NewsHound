import { useEffect, useState } from 'react';
import Header from '../Header/Header'
import Headlines from '../Headlines/Headlines'
import { getHeadlines } from '../../apiCalls';
import './App.css'

function App() {

  const [headlines, setHeadlines] = useState('')
  const [headlineError, setHedlineError] = useState('')

  // useEffect(() => {
  //   getHeadlines()
  //     .then(data => {
  //       console.log('data: ', data)
  //       setHeadlines(data.articles)
  //     })
  //     .catch(error => console.log(error))
  // }, [])

  const headlineCards = headlines.map((headline, index) => {
    <HeadlineCard
      id={index}
      key={index}
      source={headline.source.name}
      title={headline.title}
      description={headline.description}
      imgUrl={headline.urlToImage}
    />
  })

  return (
    <main className="App">
      <Header className='header'/>
      <Headlines className='headlines'/>
    </main >
  );
}

export default App;