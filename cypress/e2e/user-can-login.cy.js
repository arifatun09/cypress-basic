describe('User can login to system', () => {
  
  //positive test case
  it('user can login with valid username and password', () => {
    
    //arange
    cy.visit('http://127.0.0.1:8000/');

    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();

    //assert
    cy.get('.nav-link > .d-sm-none').should("have.text", "Hi, SuperAdmin");
  })

  //negative test case
  it('user canot login with valid username and wrong password', () => {
    //arange
    cy.visit('http://127.0.0.1:8000/');

    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password-salah");
    cy.get('.btn').click();

    //assert
    cy.get('.invalid-feedback').should("have.text", "These credentials do not match our records.")
  })

  it('user canot login with invalid username and valid password', () => {
    //arange
    cy.visit('http://127.0.0.1:8000/');

    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin11@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();

    //assert
    cy.get('.invalid-feedback').should("have.text", "These credentials do not match our records.")
  })

  it('user canot login with empty username and correct password', () => {
    //arange
    cy.visit('http://127.0.0.1:8000/');
    
    //act
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();

    //assert
    cy.get('.invalid-feedback').should("have.text", "The email field is required.")
  })

  it('user canot login with valid username and empty password', () => {
    //arange
    cy.visit('http://127.0.0.1:8000/');
    
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get('.btn').click();

    //assert
    cy.get('.invalid-feedback').should("have.text", "The password field is required.")
  })

  //Quiz
  it('user canot login empty username and empty password', () => {
    //arange
    cy.visit('http://127.0.0.1:8000/');
    
    //act
    cy.get('.btn').click();

    //assert
    cy.get(':nth-child(2) > .invalid-feedback').should("have.text", "The email field is required.");
    cy.get(':nth-child(3) > .invalid-feedback').should("have.text", "The password field is required.");
  })
})