const base_url = 'https://demoblaze.com';
describe('test004 contact', () => {
        it('click the contact icon', () => {
        cy.visit(base_url)
        let contact = cy.get(':nth-child(2) > .nav-link');
        contact.then($heading => {
            expect($heading.text()).to.equal("Contact")
        });

        contact.click().wait(500)

        cy.get('div.modal.fade.show > :nth-child(1) > :nth-child(1) > :nth-child(2) > form > div.form-group')
        .should('have.length', 3).find('.form-control').each($el=>{
            cy.wrap($el).type('rat')
        })

    })

 }) 

       
            

   
