class CheckoutPage {
    validateYourInformationFields() {
        cy.get('#first-name').should('be.visible').then($el => expect($el).to.exist)
        cy.get('#last-name').should('be.visible').then($el => expect($el).to.exist)
        cy.get('#postal-code').should('be.visible').then($el => expect($el).to.exist)
    }

    fillInformation(firstName, lastName, postalCode) {
        cy.get('#first-name').type(firstName)
        cy.get('#last-name').type(lastName)
        cy.get('#postal-code').type(postalCode)
        cy.get('#continue').click()
    }

    validateOverviewItems(count) {
        cy.get('.cart_item').then($items => {
            expect($items.length).to.equal(count)
        })
    }

    validatePaymentAndShippingInfo() {
        cy.get('.summary_value_label').each($el => {
            cy.wrap($el).then($v => expect($v.text().trim()).to.not.be.empty)
        })
    }

    validateTotalPrice() {
        cy.get('.inventory_item_price').then($priceEl => {
            const itemPrice = parseFloat($priceEl.text().replace('$', ''))
            cy.get('.summary_tax_label').then($taxEl => {
                const tax = parseFloat($taxEl.text().replace('Tax: $', ''))
                cy.get('.summary_total_label').then($totalEl => {
                    const total = parseFloat($totalEl.text().replace('Total: $', ''))
                    expect(total).to.be.closeTo(itemPrice + tax, 0.01)
                })
            })
        })
    }

    finishCheckout() {
        cy.get('#finish').click()
        cy.get('[data-test="complete-header"]').then($el => {
            expect($el.text().trim()).to.equal('Thank you for your order!')
        })
    }
}

module.exports = new CheckoutPage()
