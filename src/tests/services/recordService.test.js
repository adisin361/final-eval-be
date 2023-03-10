const recordService = require('../../services/recordService');
const { Collection, Content, RecordType } = require('../../../database/models');

describe('Content Controller', () => {
  describe('CreateRecordType', () => {
    it('should create a new RecordType', async () => {
      jest.spyOn(Collection, 'create').mockResolvedValue({
        id: 1,
        name: 'test name',
      });
      jest.spyOn(RecordType, 'create').mockResolvedValue({
        id: 1,
        collection_id: 1,
        name: 'test name',
      });
      const result = await recordService.createRecordType('test name');
      expect(result).toEqual({
        id: 1,
        collection_id: 1,
        name: 'test name',
      });
    });
  });

  describe('UpdateRecType', () => {
    it('should update a RecordType', async () => {
      jest.spyOn(RecordType, 'update').mockResolvedValue({
        id: 1,
        collection_id: 1,
        name: 'test name',
      });
      jest.spyOn(RecordType, 'findOne').mockResolvedValue({
        id: 1,
        collection_id: 1,
        name: 'test name',
      });
      jest.spyOn(Collection, 'update').mockResolvedValue({
        id: 1,
        name: 'test name',
      });
      const result = await recordService.updateRecordType(1, 'test name');
      expect(result).toEqual({ message: 'Update Successful' });
    });
  });

  describe('Edit Column Name of Record Type', () => {
    it('should edit a Column Name of Recorrd Type', async () => {
      jest.spyOn(RecordType, 'findOne').mockResolvedValue({
        id: 1,
        collection_id: 1,
        name: 'test name',
        field: {
          feat1: 'value1'
        }
      });
      jest.spyOn(RecordType, 'update').mockResolvedValue();
      jest.spyOn(Content, 'findAll').mockResolvedValue(['1', '2']);
      jest.spyOn(Promise, 'all').mockResolvedValue();
      const result = await recordService.editColumnName(1, 'test_field', 'test_field_new');
      expect(result).toEqual({ message: 'Edit Column Name Successful' });
    });
  });

  describe('Delete column of Record Type', () => {
    it('should delete a column of record Type', async () => {
      jest.spyOn(RecordType, 'findOne').mockResolvedValue({
        id: 1,
        collection_id: 1,
        name: 'test name',
        field: {
          feat1: 'value1'
        }
      });
      jest.spyOn(RecordType, 'update').mockResolvedValue();
      jest.spyOn(Content, 'findAll').mockResolvedValue(['1', '2']);
      jest.spyOn(Promise, 'all').mockResolvedValue();
      const result = await recordService.deleteColumnRecordType(1, 'test_field');
      expect(result).toEqual({ message: 'Column Delete Successful' });
    });
  });
});
