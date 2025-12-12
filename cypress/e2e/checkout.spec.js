const ProductsPage = require('../pages/productsPage')
const CartPage = require('../pages/cartPage')
const CheckoutPage = require('../pages/checkoutPage')

describe('Full Buying Process - E2E', () => {
  it('should complete the checkout flow', () => {
    cy.visit('/')
    cy.login(Cypress.env('username'), Cypress.env('password'))

    // Products
    ProductsPage.addFirstProductToCart()
    ProductsPage.cartBadgeShouldHave('1')
    ProductsPage.goToCart()
    ProductsPage.validateProductInCart()

    // Cart
    CartPage.validateCartItemCount(1)
    CartPage.checkout()

    // Checkout Information
    CheckoutPage.validateYourInformationFields()
    CheckoutPage.fillInformation('John', 'Doe', '12345')

    // Overview
    CheckoutPage.validateOverviewItems(1)
    CheckoutPage.validatePaymentAndShippingInfo()
    CheckoutPage.validateTotalPrice()

    // Finish
    CheckoutPage.finishCheckout()
  })
})
