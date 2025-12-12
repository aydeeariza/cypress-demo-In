class ProductsPage {
  addFirstProductToCart() {
    cy.get('.inventory_item:first-child button').click()
  }

  cartBadgeShouldHave(count) {
    cy.get('.shopping_cart_badge').then($el => {
      expect($el.text()).to.equal(count)
    })
  }

  goToCart() {
    cy.get('.shopping_cart_link').click()
  }

  validateProductInCart() {
    cy.get('.cart_item').then($items => {
      expect($items.length).to.be.greaterThan(0)
    })
  }
}

module.exports = new ProductsPage()
