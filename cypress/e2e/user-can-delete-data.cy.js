describe('User create user', () => {
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

  //positive test case
  it('user can delete data', () => {
    //cy.get('.table td').contains('user').next().next().next().contains('Delete').click();
    //cy.get('.table td').contains('user').nextAll().contains('Delete').click();
    cy.get('.table td').contains('user').parent().find('button').contains('Delete').click();
    //make sure swett alert visible
    cy.get('.swal-button-container').find('button').contains('OK').click();
    // cy.get(':nth-child(3) > .text-right > .d-flex > .ml-2 > .btn').click();
    // cy.get(':nth-child(2) > .swal-button').click();
    // cy.get('p').should('be.visible');
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert-success')
      .contains('User Deleted Successfully')
    ;
    cy.get('.table').should('not.contain', 'user');
  })

  it('user can cancel delete data', () => {
    // cy.get(':nth-child(3) > .text-right > .d-flex > .ml-2 > .btn').click();
    // cy.get(':nth-child(1) > .swal-button').click();
    // cy.get('.table > tbody > :nth-child(3) > :nth-child(2)').contains('user');
    //arrange
    //act
    cy.get('.table td').contains('user').parent().find('button').contains('Delete').click();
    //make sure swett alert visible
    cy.get('.swal-button-container').find('button').contains('Cancel').click();
    //assert
    cy.get('.table td').should('be.visible');
  })

  //UTS Delete
  //positive test case
  it.only('user can delete data (user)', () => {
    cy.get('.table td').contains('user').parent().find('button').contains('Delete').click();
    //make sure swett alert visible
    cy.get('.swal-button-container').find('button').contains('OK').click();
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert-success')
      .contains('User Deleted Successfully')
    ;
    cy.get('.table').should('not.contain', 'user');
  })

  it.only('user can delete data (Anothor Admin)', () => {
    cy.get('.table td').contains('Anothor Admin').parent().find('button').contains('Delete').click();
    //make sure swett alert visible
    cy.get('.swal-button-container').find('button').contains('OK').click();
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert-success')
      .contains('User Deleted Successfully')
    ;
    cy.get('.table').should('not.contain', 'Anothor Admin');
  })

  it.only('user can delete data (User Baru)', () => {
    cy.get('.table td').contains('User baru').parent().find('button').contains('Delete').click();
    //make sure swett alert visible
    cy.get('.swal-button-container').find('button').contains('OK').click();
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert-success')
      .contains('User Deleted Successfully')
    ;
    cy.get('.table').should('not.contain', 'User baru');
  })
  
  //negative test case
  it('dummy', () => {
    //arrange
    //act
    //assert
  })
})