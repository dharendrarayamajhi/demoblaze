const base_url = 'https://demoblaze.com/';

describe('text002-monitors', () =>{
    it('Check if there are 2 items in the monitor page', () =>{
        
        cy.visit(base_url)
        cy.get('div.list-group > :nth-child(4)').click()
        cy.get('div.row #tbodyid')
        
        .then($el =>{
           expect($el).to.have.length(1)
         
        })
        cy.get('a[href="prod.html?idp_=10"]').then($el =>{
            expect($el.text()).to.equal("Apple monitor 24")
            
        })
        cy.get('a[href="prod.html?idp_=14"]').then($el=>{
            expect($el.text()).to.equal("ASUS Full HD")
        })

        
    })
    
})