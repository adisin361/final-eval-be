const recordService = require('../../../src/services/recordService');
const recordController = require('../../controllers/recordController');

describe('Record Controller', () => {
  describe('createRecordType', () => {
    const mockData = {
      name: 'test',
    };

    it('should create a new record type', async () => {
      jest.spyOn(recordService, 'createRecordType').mockResolvedValue(mockData);

      const req = {
        body: jest.fn(),
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await recordController.createRecordType(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ data: mockData });
    });

    it('should return an error if the record type already exists', async () => {
      jest.spyOn(recordService, 'createRecordType').mockRejectedValue(new Error('Record type already exists'));

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await recordController.createRecordType(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Record type already exists' });
    });
  });

  describe('updateRecordType', () => {
    const mockData = {
      name: 'test',
      id: 1,
    };

    it('should update a record type', async () => {
      jest.spyOn(recordService, 'updateRecordType').mockResolvedValue(mockData);

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await recordController.updateRecordType(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: mockData });
    });

    it('should return an error if the record type does not exist', async () => {
      jest.spyOn(recordService, 'updateRecordType').mockRejectedValue(new Error('Record type does not exist'));

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await recordController.updateRecordType(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Record type does not exist' });
    });
  });

  describe('addColumn', () => {
    const mockData = {
      id: 1,
      field_name: 'test',
      field_type: 'string',
    };

    it('should add a column to a record type', async () => {
      jest.spyOn(recordService, 'addColumn').mockResolvedValue(mockData);

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await recordController.addColumn(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: mockData });
    });

    it('should return an error if the record type does not exist', async () => {
      jest.spyOn(recordService, 'addColumn').mockRejectedValue(new Error('Record type does not exist'));

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await recordController.addColumn(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Record type does not exist' });
    });
  });

  describe('editColumnName', () => {
    it('should edit a column name', async () => {
      const mockData = {
        id: 1,
        field_name: 'test',
        field_type: 'string',
      };

      jest.spyOn(recordService, 'editColumnName').mockResolvedValue(mockData);

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await recordController.editColumnName(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: mockData });
    });

    it('should return an error if the record type does not exist', async () => {
      const mockData = {
        id: 1,
        field_name: 'test',
        field_type: 'string',
      };

      jest.spyOn(recordService, 'editColumnName').mockRejectedValue(new Error('Record type does not exist'));

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await recordController.editColumnName(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Record type does not exist' });
    });
  });

  describe('deleteColumnRecordType', () => {
    it('should delete a column from a record type', async () => {
      const mockData = {
        id: 1,
        field_name: 'test',
        field_type: 'string',
      };

      jest.spyOn(recordService, 'deleteColumnRecordType').mockResolvedValue(mockData);

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await recordController.deleteColumnRecordType(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: mockData });
    });
    it('should return an error if the record type does not exist', async () => {
      const mockData = {
        id: 1,
        field_name: 'test',
        field_type: 'string',
      };

      jest.spyOn(recordService, 'deleteColumnRecordType').mockRejectedValue(new Error('Record type does not exist'));

      const req = {
        body: mockData,
      };

      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };

      await recordController.deleteColumnRecordType(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Record type does not exist' });
    });
  });
});









