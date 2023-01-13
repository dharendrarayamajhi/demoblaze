const base_url = 'https://demoblaze.com/';

describe('text002-monitors', () =>{
    it('Check if there are 2 items in the monitor page', () =>{
        
        cy.visit(base_url)
        cy.get('div.list-group > :nth-child(4)').click().wait(500)
        
        cy.get('#tbodyid > div:nth-child(2) > div > div > h5').then($el =>{
            expect($el.text()).to.equal("$230")
           
        })

        cy.get('#tbodyid > div:nth-child(1) > div > div > h5').then($el=>{

            expect($el.text()).to.equal('$400')
        })
        
        
        

        
    })
    
})