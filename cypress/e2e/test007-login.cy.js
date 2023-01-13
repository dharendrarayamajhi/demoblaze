const { italic, cyan } = require("colorette")

const base_url = 'https://demoblaze.com'

describe('test007, testing login page', () =>{
    it('entering data into the login page', ()=>{
        cy.visit(base_url)
        cy.get('#login2').click().wait(200)

        let usrname = cy.get('#loginusername').wait(500) // this code won't work without the wait function.
        

        let passwd = cy.get('#loginpassword')

        cy.fixture('login').then(el=>{
            
            usrname.type(el.username).wait(500)
            passwd.type(el.password)



        })
        cy.get('button[onclick="logIn()"]').click()



    })



})