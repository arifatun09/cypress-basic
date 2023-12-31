describe('User Can Edit Existing Data', () => {
  afterEach(()  => {
    cy.exec(
      'cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed'
    );
  })
  //before each test case
  beforeEach(() => {
    //reset database by calling php artisan
    cy.exec(
      'cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed'
    );
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit('http://127.0.0.1:8000/user-management/user')
  });
  
  // positive test case
  it('User can edit existing data', () => {
    cy.get('.table td').contains('user').parent().find('a').contains('Edit').click();
    //make sure swett alert visible
    cy.get('#name').clear('user ');
    cy.get('#name').type('user edited');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('user').should('have.text', 'user edited');
    cy.get(".alert")
      .should("be.visible")
      .and("have.class", "alert-success")
      .and("contain", "User Berhasil Diupdate")
    ;
  })
//positive test case 
//UTS
  it.only('User can edit existing data user baru', () => {
    cy.get('.table td').contains('User baru').parent().find('a').contains('Edit').click();
    cy.get('#name').clear('User bar');
    cy.get('#name').type('User new');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('User baru').should('have.text', 'User new');
    cy.get(".alert")
      .should("be.visible")
      .and("have.class", "alert-success")
      .and("contain", "User Berhasil Diupdate")
    ;
  })
  //UTS
  it.only('User can edit existing data user', () => {
    cy.get('.table td').contains('user').parent().find('a').contains('Edit').click();
    //make sure swett alert visible
    cy.get('#name').clear('user ');
    cy.get('#name').type('user edited');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('user').should('have.text', 'user edited');
    cy.get(".alert")
      .should("be.visible")
      .and("have.class", "alert-success")
      .and("contain", "User Berhasil Diupdate")
      ;
    })
  //negative test case
})