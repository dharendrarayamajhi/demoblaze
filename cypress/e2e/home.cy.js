const base_url ='https://demoblaze.com/'

describe('testing home page of Demoblaze.com', () =>{
    beforeEach(() =>{
        cy.viewport(1536, 731)
        cy.visit(base_url)


    });
        
        
    // it('TC-HOME-001, verify that the user can browse the home page and see 9 items in the product list', () =>{
    //     cy.visit(base_url)
    //     cy.get('div.card.h-100').should('have.length', 9).each($el =>{

    //         cy.wrap($el).find('div.card-block > h4')
    //         cy.wrap($el).find('div.card-block > h5').should('contain', '$');
    //         cy.wrap($el).find('div.card-block > p').should('have.class', 'card-text')
    //     });



    // });
    // it('TC-HOME-002, Verify that all the buttons under Categories tab is working and contains THREE different items', ()=>{
    //     cy.get('.list-group').children(4)
    //     cy.get('.list-group').each($el =>{
            
            
    //         cy.wrap($el).find('#cat').should('have.length', 1).and('contain', "CATEGORIES").siblings('#itemc').should('have.length', 3)
    //         cy.wrap($el).find('#cat').siblings('#itemc').should('contain', 'Phones')
    //         cy.wrap($el).find('#cat').siblings('#itemc').should('contain', 'Laptops')
    //         cy.wrap($el).find('#cat').siblings('#itemc').should('contain', 'Monitors')

         

    //     }) ; 

    // it('TC-HOME-003, verify that home carousal part is working', () =>{
    //     cy.clock()
    //     cy.get("div.carousel-inner").each($el =>{
    //         cy.wrap($el).find('div.carousel-item').siblings().should('have.length', 3)
    //         cy.wrap($el).find('[src="Samsung1.jpg"]').should('be.visible')
    //     })
    //     cy.get("div.carousel-inner").find('div.carousel-item.active').invoke('index').should('eq', 0)
    //     cy.get('img.d-block.img-fluid[alt="First slide"]').should('have.attr', 'src').should('include', 'Samsung1.jpg');
    //     cy.get('img.d-block.img-fluid[alt="Second slide"]').should('have.attr', 'src').should('include', 'nexus1.jpg');;
    //     cy.get('img.d-block.img-fluid[alt="Third slide"]').should('have.attr', 'src').should('include', 'iphone1.jpg');;
        
    //      });

         
    // it('TC-HOME-004, Verify the footer of Homepage is visible and contains information', () =>{


    // });


    it('TC-HOME-005, verify that user can click the phones button under the categories and there should be 7 items.', () =>{
        cy.get('div.list-group > :nth-child(2)').click().wait(500)
        cy.get('div.card.h-100').should('have.length', 7).each($el => {

            cy.wrap($el).find('div.card-block > h4').wait(300)
            cy.wrap($el).find('div.card-block > h5').should('contain', '$')
            cy.wrap($el).find('div.card-block > p').should('have.class', 'card-text')


        })
        // cy.wait(500)
        // cy.get('div.card.h-100 > div.card-block > h4').invoke('index').each($el =>{

        //     cy.wrap($el).should('contain', 'Samsung galaxy s6')
        // })
        
        // (['Samsung galaxy s6', 'Nokia lumia 1520', 'Nexus 6',  'Samsung galaxy s7', 'Iphone 6 32gb', 'Sony xperia z5', 'HTC One M9'])

        // cy.get('div.card.h-100 > div.card-block > h4').invoke('show')
        // .should('deep.eqaul', ['Samsung galaxy s6', 'Nokia lumia 1520', 'Nexus 6', 'Samsung galaxy s7', 'Iphone 6 32gb', 'Sony xperia z5', 'HTC One M9'])



    });


    // it('TC-HOME-006, Verify that the laptops tab button is working from the categories section', () =>{
    //     cy.get('div.list-group > :nth-child(3)').click().wait(500)
    //     cy.get('div.card.h-100').should('have.length', 6).each($el => {

    //         cy.wrap($el).find('div.card-block > h4').should('be.visible')
    //         // .and('have.array', ['Samsung galaxy s6', 'Nokia lumia 1520', 'Nexus 6',  'Samsung galaxy s7', 'Iphone 6 32gb', 'Sony xperia z5', 'HTC One M9'])
    //         // .invoke('show').wait(500)
    //         cy.wrap($el).find('div.card-block > h5').should('contain', '$')
    //         cy.wrap($el).find('div.card-block > p').should('have.class', 'card-text')


    //     })


    // });
      
    
    // it('TC-HOME-007, verify that the monitosr tab is visible and clickable. ', ()=>{
    //     cy.get('div.list-group > :nth-child(4)').then($heading =>{
    //         expect($heading.text()).to.equal("Monitors")
    //         let monitors = cy.get('div.list-group > :nth-child(4)');
    //         monitors.click()

    //     })

    // });


    // it('TC-HOME-009, verify that there are 2 items in the monitor page.', ()=>{
    //     cy.get('div.list-group > :nth-child(4)').click().wait(2000)


    //         cy.get('div.card.h-100').should('have.length', 2).wait(500)      
               
    //  });

    // it('TC-HOE-010, Veriffy that the items have the products image, name, price and the product description.', ()=>{
    //     cy.get('div.list-group > :nth-child(4)').click().wait(2000)
                    
    //         cy.get('div.card.h-100').should('have.length', 2).wait(500)
            
    //         .each($el =>{
    //             cy.wrap($el).find('div.card-block > h4').wait(200)
    //             cy.wrap($el).find('div.card-block > h5').wait(200).should('contain', '$')
    //             cy.wrap($el).find('div.card-block > p').wait(200).should('have.class', 'card-text')


    //         })
        
    // });


    // it('TC-HOME-011, verify that the homepage contains 6 different navigation parts', () =>{
    //     cy.get('#navbarExample > ul.navbar-nav.ml-auto').each($el =>{

    //         cy.wrap($el).find('li.nav-item').should('have.length', 6)

    //     })



    // });


    // it('TC-HOME-012', () =>{


    // });


    // it('TC-HOME-013', () =>{


    // });


    // it('TC-HOME-014', () =>{


    // });


    // it('TC-HOME-015', () =>{


    // });


    // it('TC-HOME-016', () =>{


    // });


    // it('TC-HOME-017', () =>{


    // });


    // it('TC-HOME-018', () =>{


    // });
    

    // it('TC-HOME-019', () =>{


    // });


    // it('TC-HOME-020', () =>{


    // });


    // it('TC-HOME-021', () =>{


    // })
    
})