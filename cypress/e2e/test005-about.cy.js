// const { italic, cyan } = require("colorette")

const base_url ='https://demoblaze.com/'

describe('test005, testing the about page', ()=>{
    it('clicking the about page', () =>{
        cy.visit(base_url)
        cy.get(':nth-child(3) > .nav-link').click().wait(1000)
        cy.get('button.vjs-big-play-button').click().wait(7000)
        
        let closeButton = cy.get('#videoModal > div > div > div.modal-footer > button').then($heading =>{
            expect($heading.text()).to.equal('Close')

            closeButton.click()
        })
        
        
       


    })
    




})