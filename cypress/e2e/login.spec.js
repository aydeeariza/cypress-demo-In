describe('Login Test', () => {
  it('should login successfully', () => {
    cy.visit('/')
    cy.login(Cypress.env('username'), Cypress.env('password'))
  })
})
