/// <reference types="Cypress" />

describe('My first test suite', function()
{
    it('My FirstTest case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(5000)
        cy.get('.product').should('have.length',4)

    })
})
