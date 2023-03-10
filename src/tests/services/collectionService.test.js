const collectionService = require('../../services/collectionService');
const { Collection } = require('../../../database/models');
describe('Collection Service', () => {

  it('should return a list of collections', async () => {
    const mockData = {
      name: 'test',
    };

    jest.spyOn(Collection, 'findAll').mockResolvedValue(mockData);

    const data = await collectionService.listCollections();
    expect(data).toEqual(mockData);
  });

  it('should return an error if the collection does not exist', async () => {
    jest.spyOn(Collection, 'findAll').mockRejectedValue(new Error('Collection does not exist'));

    try {
      await collectionService.listCollections();
    } catch (e) {
      expect(e.message).toEqual('Collection does not exist');
    }
  });

  it('should return an error if the collection does not exist', async () => {
    jest.spyOn(Collection, 'create').mockRejectedValue(new Error('Collection does not exist'));

    try {
      await collectionService.addRecord();
    } catch (e) {
      expect(e.message).toEqual('Collection does not exist');
    }
  });
});
