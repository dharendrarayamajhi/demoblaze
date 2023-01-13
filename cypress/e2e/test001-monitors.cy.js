const base_url = 'https://demoblaze.com/';
describe('test001-monitors', ()=>{
    it('testing the clickability of monitors button', () =>{

        cy.visit(base_url)
        
            cy.get('div.list-group > :nth-child(4)').then($heading =>{
                expect($heading.text()).to.equal("Monitors")
                let monitors = cy.get('div.list-group > :nth-child(4)');
                monitors.click()
            })
     
    })

})