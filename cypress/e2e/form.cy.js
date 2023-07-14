describe("Test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234/")
    })
    const username = () => cy.get("input[name=username]");
    const email = () => cy.get("input[name=email]");
    const role = () => cy.get("select[name=role]");
    const single = () => cy.get("input[name=civil][value='single']");
    const married = () => cy.get("input[name=civil][value='married']");
    const submitBtn=()=>cy.get("button")


    it ("test the environment",()=>{
        expect(1+2).to.equal(3)
    })


    describe("Submit button will enable when inputs entered",()=>{
        it("make sure the input elements should exist",()=>{
            username().should("exist")
            email().should("exist")
            role().should("exist")
            single().should("exist")
            married().should("exist")
        })
        it("test submit button disabled",()=>{
            username().should('have.value',"")
            email().should('have.value', "")
            role().should('have.value', "")
            //make sure both radio are not selected 
            single().should("not.be.checked");
            married().should("not.be.checked");
            submitBtn().should("be.disabled")
            

        })
        it("submit button is able to click",()=>{
            username().type("hello1111")
            email().type("xsjdh@gmail.com")
            role().select("instructor")//choose one option in <select>element 
            single().click().should("be.checked");//input type=radio, choose one 
            married().should("not.be.checked");
            submitBtn().should("not.be.disabled")
            //test the situation after submitting
            submitBtn().click()
            username().should('have.value', "")
            email().should('have.value', "")
            role().should('have.value', "")
            single().should("not.be.checked")
            married().should("not.be.checked")

            cy.contains("hello1111")
            cy.contains("xsjdh@gmail.com")

           
        })
        it("check the hint of input",()=>{
            username().type("hello")
            cy.contains("need to over 6 characters")
        })
        it("test input is email format", () => {
            
            email().type("test")
            cy.contains("must be a valid email")
        });
        

        
    })


})