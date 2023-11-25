import { useEffect, useState } from 'react';
import { cleanData } from '../../utils';
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Headlines from '../Headlines/Headlines'
import SelectedArticle from '../SelectedArticle/SelectedArticle'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import { getHeadlines } from '../../apiCalls';
import './App.css'

function App() {

  const [headlines, setHeadlines] = useState([])
  const [headlineError, setHeadlineError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getHeadlines()
      .then(data => {
        setHeadlines(cleanData(data.articles))
      })
      .catch(error => setHeadlineError(error.message))
  }, [])

  const handleSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm)
  }

  return (
    <main className="App">
      <Header className='header' handleSearchTerm={handleSearchTerm}/>
      {headlineError ? (
        <div className='app-error-container'>
          <ErrorComponent headlineError={headlineError} message="We're experiencing server issues.  Please try again later."/>
        </div>
      ) : (
      
      <Routes>
        <Route path='/' element={<Headlines className='headlines' headlines={headlines} searchTerm={searchTerm}/>}/>
        <Route path='/story/:title' element={<SelectedArticle className='selectedArticle' headlines={headlines}/>}/>
        <Route path='*' element={<ErrorComponent headlineError={headlineError} message="We can't find that page, please try again."/>}/>
      </Routes>
      )}
    </main >
  )
}

export default App;