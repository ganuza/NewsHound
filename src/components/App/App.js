import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Headlines from '../Headlines/Headlines'
import SelectedArticle from '../SelectedArticle/SelectedArticle';
import { getHeadlines } from '../../apiCalls';
import './App.css'

function App() {
  const dummyHeadlines = {
    "status": "ok",
    "totalResults": 37,
    "articles": [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "By <a href=\"/profiles/jackie-wattles\">Jackie Wattles</a>, CNN",
            "title": "SpaceX Starship launch: Live updates - CNN",
            "description": "SpaceX will make its second attempt to successfully launch Starship, a gargantuan rocket designed to carry humans to the moon and Mars.",
            "url": "https://www.cnn.com/world/live-news/spacex-starship-launch-scn/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/231115200448-spacex-starship-prepare-111523-super-tease.jpg",
            "publishedAt": "2023-11-18T16:20:00Z",
            "content": "SpaceX did not finish the entire mission, and both the Starship spacecraft and Super Heavy booster exploded over the ocean.\r\nBut there were some big highlights for SpaceX. \r\nThe rocket made it much f… [+2333 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WMUR Manchester"
            },
            "author": "Kirk Enstrom",
            "title": "New Hampshire Hospital shooting: Suspect's name released - WMUR Manchester",
            "description": "The victim of a shooting at New Hampshire Hospital in Concord on Friday afternoon has been identified, officials with the New Hampshire Attorney General's Office announced.",
            "url": "https://www.wmur.com/article/new-hampshire-hospital-shooting-suspect-111823/45881767",
            "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/john-madore-mug-breaking-0150-6558d8a018815.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
            "publishedAt": "2023-11-18T15:33:00Z",
            "content": "Investigators have identified a man suspected of shooting and killing a security officer Friday at New Hampshire Hospital.\r\nAttorney General John Formella said John Madore, 33, shot and killed Bradle… [+4087 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Cosmic Vanishing Acts: NASA Unraveling the Mystery of Shrinking Exoplanets - SciTechDaily",
            "description": "A new study could explain the ‘missing’ exoplanets between super-Earths and sub-Neptunes. Some exoplanets seem to be losing their atmospheres and shrinking. In a new study using NASA’s retired Kepler Space Telescope, astronomers find evidence of a possible ca…",
            "url": "https://scitechdaily.com/?p=329200",
            "urlToImage": "https://scitechdaily.com/images/Shrinking-Exoplanet-Illustration.jpg",
            "publishedAt": "2023-11-18T15:21:46Z",
            "content": "ByJet Propulsion LaboratoryNovember 18, 2023\r\nResearchers using data from the Kepler Space Telescope have found that some exoplanets are shrinking due to loss of their atmospheres, likely caused by r… [+9373 chars]"
        }
    ]
  }
  const [headlines, setHeadlines] = useState(dummyHeadlines.articles)
  const [headlineError, setHedlineError] = useState('')

  // useEffect(() => {
  //   getHeadlines()
  //     .then(data => {
  //       console.log('data: ', data)
  //       setHeadlines(data.articles)
  //     })
  //     .catch(error => console.log(error))
  // }, [])


  return (
    <main className="App">
      <Header className='header'/>
      <Routes>
        <Route path='/' element={<Headlines className='headlines' headlines={headlines}/>}/>
        <Route path='/story/:title' element={<SelectedArticle className='selectedArticle' headlines={headlines}/>}/>
        {/* <Route path='*' element={<ErrorComponent />}/> */}
      </Routes>
      
    </main >
  );
}

export default App;