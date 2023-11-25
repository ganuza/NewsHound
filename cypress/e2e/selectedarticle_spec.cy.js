describe('selected article page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c6d48ffd760d45529d11dc3c64bcca5b', {
      statusCode: 200,
      fixture: 'articleData'
    }).as('fetchStories')
    cy.visit('localhost:3000').wait('@fetchStories')
  })

  it('should show a selected article', () => {
    cy.get('.headline-card').first().click()
    cy.url().should('eq', 'http://localhost:3000/story/SpaceX%20Starship%20launch:%20Live%20updates%20-%20CNN')
    cy.get('.selected-article-details').should('contain', 'SpaceX Starship launch: Live updates - CNN')
    cy.get('.selected-article-details').should('contain', 'Published: 2023-11-18')
    cy.get('.selected-article-image').should('have.attr', 'src', "https://cdn.cnn.com/cnnnext/dam/assets/231115200448-spacex-starship-prepare-111523-super-tease.jpg")
    cy.get('.selected-article-details').should('contain', 'SpaceX will make its second attempt to successfully launch Starship, a gargantuan rocket designed to carry humans to the moon and Mars.')
    cy.get('.selected-article-details').should('contain', "SpaceX did not finish the entire mission, and both the Starship spacecraft and Super Heavy booster exploded over the ocean.")
  })

  it('should let a user return home', () => {
    cy.get('.headline-card').first().click()
    cy.get('a').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})