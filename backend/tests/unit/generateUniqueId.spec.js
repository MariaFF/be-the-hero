const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueId();
    //eu espero que o id seja unico
    expect(id).toHaveLength(8);
  })
})