const base_url = 'https://demoblaze.com';
describe('test004 contact', () => {
        it('click the contact icon', () => {
        cy.visit(base_url)
        let contact = cy.get(':nth-child(2) > .nav-link');
        contact.then($heading => {
            expect($heading.text()).to.equal("Contact")
        });

        contact.click()

        cy.get('#recipient-email').type('abcdefghij@happy.com')

        cy.get('#recipient-name').type('abcsef')
        cy.get('#message-text').type("Hello World")
        cy.get('div.modal-footer > :nth-child(2)[onclick="send()"]').click()
        
                

    })

})

