const collectionController = require('../../controllers/collectionController');
const collectionService = require('../../services/collectionService');

describe('Collection Controller', () => {
  describe('listCollections', () => {
    const mockData = {
      name: 'test',
    };

    it('should return a list of collections', async () => {
      jest.spyOn(collectionService, 'listCollections').mockResolvedValue(mockData);

      const req = {
        body: jest.fn(),
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await collectionController.listCollections(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: mockData });
    });

    it('should return an error if the collection does not exist', async () => {
      jest.spyOn(collectionService, 'listCollections').mockRejectedValue(new Error('Collection does not exist'));

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await collectionController.listCollections(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Collection does not exist' });
    });
  });

  describe('addRecord', () => {
    const mockData = {
      name: 'test',
    };

    it('should add a record to a collection', async () => {
      jest.spyOn(collectionService, 'addRecord').mockResolvedValue(mockData);

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await collectionController.addRecord(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: mockData });
    });

    it('should return an error if the collection does not exist', async () => {
      jest.spyOn(collectionService, 'addRecord').mockRejectedValue(new Error('Collection does not exist'));

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await collectionController.addRecord(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Collection does not exist' });
    });
  });

  describe('editRecord', () => {
    const mockData = {
      name: 'test',
    };

    it('should edit a record in a collection', async () => {
      jest.spyOn(collectionService, 'editRecord').mockResolvedValue(mockData);

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await collectionController.editRecord(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: mockData });
    });

    it('should return an error if the collection does not exist', async () => {
      jest.spyOn(collectionService, 'editRecord').mockRejectedValue(new Error('Collection does not exist'));

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await collectionController.editRecord(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Collection does not exist' });
    });
  });

  describe('deleteRecord', () => {
    const mockData = {
      name: 'test',
    };

    it('should delete a record from a collection', async () => {
      jest.spyOn(collectionService, 'deleteRecord').mockResolvedValue(mockData);

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await collectionController.deleteRecord(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: mockData });
    });

    it('should return an error if the collection does not exist', async () => {
      jest.spyOn(collectionService, 'deleteRecord').mockRejectedValue(new Error('Collection does not exist'));

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await collectionController.deleteRecord(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Collection does not exist' });
    });
  });
});
