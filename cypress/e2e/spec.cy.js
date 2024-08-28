describe('Serverest API test', () => {
  it('should return a list of users', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios'
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

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
      expect(response.status).to.eq(201)
    })
  });
})