describe('template spec', () => {
  it('should show error page for 404 status code', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c6d48ffd760d45529d11dc3c64bcca5b', {
      statusCode: 404,
      body: ''
    }).as('fetchStories')
    cy.visit('localhost:3000').wait('@fetchStories')
    cy.get('.error-container').should('contain', 'Error')
    cy.get('.error-container').should('contain', "404 Not Found. Uh oh, we're having server issues")
    cy.get('.error-container').should('contain', "We're experiencing server issues.")
  })
  
  it('should show error page for 500 status code', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c6d48ffd760d45529d11dc3c64bcca5b', {
      statusCode: 500,
      body: ''
    }).as('fetchStories')
    cy.visit('localhost:3000').wait('@fetchStories')
    cy.get('.error-container').should('contain', 'Error')
    cy.get('.error-container').should('contain', "500 Internal Server Error. Uh oh, we're having server issues")
    cy.get('.error-container').should('contain', "We're experiencing server issues.")
  })
})