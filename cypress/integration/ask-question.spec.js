describe('Asking a Question', () => {
  it('accepts input', () => {
    // const questionId = 27
    const question = 'What is my name?'

    cy.visit('/')

    cy.get('.question').type(question).should('have.value', question)
  })
})
