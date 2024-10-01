import { faker } from "@faker-js/faker"

describe('Serverest API test', () => {
  let userId;

  it('should successfully retrieve a complete list of registered users', () => {
    cy.request('GET', '/usuarios').then(({ status }) => {
      expect(status).to.eq(200)
    })
  })

  it('should successfully create a new user with valid data', () => {
    const randomEmail = faker.internet.email()
    cy.request({
      method: 'POST',
      url: '/usuarios',
      body: {
        nome: "User api",
        email: randomEmail,
        password: "teste@123",
        administrador: "true"
      }
    }).then(({ status, body }) => {
      expect(status).to.eq(201)
      userId = body._id
    })
  })

  it('should successfully retrieve the newly created user by their unique ID', () => {
    cy.request('GET', `/usuarios/${userId}`).then(({ status }) => {
      expect(status).to.eq(200)
    })
  })

  it('should update the user information successfully with new data', () => {
    const updateRandomEmail = faker.internet.email()
    cy.request({
      method: 'PUT',
      url: `/usuarios/${userId}`,
      body: {
        nome: "User api",
        email: updateRandomEmail,
        password: "teste@123",
        administrador: "true"
      }
    })
  })

  it('should delete the user successfully and confirm their removal from the system', () => {
    cy.request('DELETE', `/usuarios/${userId}`).then(({ status }) => {
      expect(status).to.eq(200)

      cy.request({
        method: 'GET',
        url: `/usuarios/${userId}`,
        failOnStatusCode: false
      }).then(({ status }) => {
        expect(status).to.eq(400)
      })
    })
  })
})
