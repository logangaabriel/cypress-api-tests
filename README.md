# API Testing with Cypress

This repository demonstrates how to perform API testing using Cypress with ServeRest API as an example. Cypress is a powerful testing framework that allows for end-to-end testing and is also well-suited for API testing.

## Setup

To get started with this project, you'll need to set up Cypress in your local environment.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/logangaabriel/cypress-api-tests.git
   cd cypress-api-tests
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Open Cypress:**

   ```bash
   npx cypress open
   ```

   This will open the Cypress Test Runner where you can run and manage your tests.

## Writing Tests

Test files are located in the `cypress/e2e` directory. You can create new test files here to add your own API tests. For example, the `serverest-tests.cy.js` file includes tests for various ServeRest API endpoints.

Here's a sample test for ServeRest API:

```javascript
describe('ServeRest API Tests', () => {
  it('should return a list of users', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios'
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should create a new user', () => {
    cy.request({
      method: 'POST', 
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: "User api",
        email: "userapi2@qa.com.br",
        password: "teste@123",
        administrador: "true"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
```

## Running Tests

To run the tests, you can use the following command:

```bash
npx cypress run
```

This command will execute all the tests in headless mode. You can also run tests interactively using:

```bash
npx cypress open
```
## Contact

Feel free to reach out if you have any questions or need further assistance.

- Email: [contatologangabriel@gmail.com](contatologangabriel@gmail.com)
- LinkedIn: [Gabriel Logan](https://www.linkedin.com/in/gabriel-logan/)
- Blog: [Medium](https://medium.com/@gabriellogan.0804/como-executar-testes-de-api-com-cypress-um-guia-passo-a-passo-94cbf1bdd240)
