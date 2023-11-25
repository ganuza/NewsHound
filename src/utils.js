export const cleanData = (articles) => {
  let stories = articles.filter((article) => article.description && article.title !== null)

  let cleanArticles = stories.filter((story) => story.title !== '[Removed]')

  return cleanArticles
}