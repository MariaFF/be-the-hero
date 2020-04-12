const request = require('supertest')
const app =require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
  //executar antes de cada teste
  beforeEach(async() => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  })

  //executar apos todos os testes
  afterAll(async() => {
    await connection.destroy()
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    .send({
      name: "Teste",
      email: "teste@teste.com",
      whatsapp: "4600000000",
      city: "Cidade teste",
      uf: "PR"
    });
    console.log('id', response.body);
    
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    
  });  
})