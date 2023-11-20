export const getHeadlines = () => {
  return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c6d48ffd760d45529d11dc3c64bcca5b')
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}. Uh oh, we're having server issues`)
      }
      return response.json()
    })
}