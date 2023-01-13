const base_url = 'https://demoblaze.com';
describe('test004 contact', () => {
      
    it('click the contact icon', () => {
        cy.visit(base_url)
        let contact = cy.get(':nth-child(2) > .nav-link');
        contact.then($heading => {
            expect($heading.text()).to.equal("Contact")
        });

        contact.click().wait(500)
    

        cy.fixture('contact').then(item => {
            
           
            cy.get('#recipient-email').type(item.email).wait(500)
            cy.get('#recipient-name').type(item.name).wait(500)
            cy.get('#message-text').type(item.message).wait(500)

            }) 
              
             
        cy.get('div.modal-footer > :nth-child(2)[onclick="send()"]').click()
       
    })

})

