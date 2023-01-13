const base_url = 'https://demoblaze.com/cart.html';

describe('test006, selecting items for purchase and placing the order', ()=>{
    // beforeEach(()=>{
    //     cy.visit(base_url);
    //     cy.get('.col-lg-1 > .btn').click()
    //     .wait(300);

    // })
    it('filling the purchase form through fixture', ()=>{
        cy.visit(base_url);
        cy.get('.col-lg-1 > .btn').click()
        .wait(300);

            // cy.get('#name').type("abcdef")
            // cy.get('#country').type("ramamam")
            // cy.get('#city').type("ramamam")
            // cy.get('#card').type("ramamam")
            // cy.get('#month').type("ramamam")
            // cy.get('#year').type("ramamam")

        cy.fixture('cart').then(element =>{

            let fullName = cy.get('#name');
            let countryName = cy.get('#country');
            let cityName = cy.get('#city');
            let cardName = cy.get('#card');
            let monthName = cy.get('#month');
            let yearName = cy.get('#year');


            fullName.type(element.name).wait(500)
            countryName.type(element.country).wait(500)
            cityName.type(element.city).wait(500)
            cardName.type(element.card).wait(500)
            monthName.type(element.month).wait(500)
            yearName.type(element.year).wait(500)
           

          
        })

        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

        

    })




})
