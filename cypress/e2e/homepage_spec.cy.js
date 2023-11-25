describe('homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c6d48ffd760d45529d11dc3c64bcca5b', {
      statusCode: 200,
      fixture: 'articleData'
    }).as('fetchStories')
    cy.visit('localhost:3000').wait('@fetchStories')
  })
  it('should show a title, search field and 3 headline cards', () => {
    cy.get('h1').should('contain', 'NewsHound')
    cy.get('input').should('have.attr', 'placeholder', 'Search')
    cy.get('.headlines-cont').children().should('have.length', 3)
    cy.get('.headline-card').first().should('contain', 'CNN')
    cy.get('.headline-card').first().should('contain', 'SpaceX Starship launch: Live updates - CNN')
    cy.get('.headline-card').first().should('contain', 'Published: 2023-11-18')
    cy.get('.headline-card-image').first().should('have.attr', 'src', "https://cdn.cnn.com/cnnnext/dam/assets/231115200448-spacex-starship-prepare-111523-super-tease.jpg")
    cy.get('.headline-card').last().should('contain', 'SciTechDaily')
    cy.get('.headline-card').last().should('contain', 'Cosmic Vanishing Acts: NASA Unraveling the Mystery of Shrinking Exoplanets - SciTechDaily')
    cy.get('.headline-card').last().should('contain', 'Published: 2023-11-18')
    cy.get('.headline-card-image').last().should('have.attr', 'src', "https://scitechdaily.com/images/Shrinking-Exoplanet-Illustration.jpg")
  })

  it('should let a user search', () => {
    cy.get('input').type('Manchester').should('have.value', 'Manchester')
    cy.get('.headlines-cont').children().should('have.length', 1)
    cy.get('.headline-card').first().should('contain', 'WMUR Manchester')
    cy.get('.headline-card').first().should('contain', "New Hampshire Hospital shooting: Suspect's name released - WMUR Manchester")
    cy.get('.headline-card').first().should('contain', 'Published: 2023-11-18')
    cy.get('.headline-card-image').first().should('have.attr', 'src', "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/john-madore-mug-breaking-0150-6558d8a018815.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*")
  })
})