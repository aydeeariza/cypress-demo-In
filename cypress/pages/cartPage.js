class CartPage {
  checkout() {
    cy.get('#checkout').click()
  }

  validateCartItemCount(count) {
    cy.get('.cart_item').then($items => {
      expect($items.length).to.equal(count)
    })
  }
}

module.exports = new CartPage()
