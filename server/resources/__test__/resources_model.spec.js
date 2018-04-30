const mongoose = require('mongoose');
const { removeMongoKeys } = require('../../utils/general');

mongoose.connect(process.env.MONGO_URI_TEST);
const Resource = require('../resources_model');

describe('resources model test', () => {
  let input;
  beforeAll(async () => {
    await Resource.remove({});

    input = {
      name: 'wood',
      quantity: 2000,
      perSec: 0.3,
      incPerUpdate: 0.6,
    };
  });

  afterEach(async () => {
    await Resource.remove({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should has a module', () => {
    expect(Resource).toBeDefined();
  });

  describe('get resources', () => {
    beforeEach(async () => {
      await Resource.insertMany(input, input);
    });

    it('should get resources', async () => {
      const resources = await Resource.find({}).lean();

      expect(removeMongoKeys(resources)).toContainEqual(input);
    });
  });

  describe('get resource', () => {
    beforeEach(async () => {
      await new Resource(input).save();
    });

    it('should get resource', async () => {
      const resources = await Resource.findOne({ name: 'wood' }).lean();

      expect(removeMongoKeys(resources)).toEqual(input);
    });
  });

  describe('update resources', () => {
    beforeEach(async () => {
      await new Resource(input).save();
    });

    it('should update resource', async () => {
      const updateResource = await Resource.findOneAndUpdate(
        { name: 'wood' },
        { $inc: { quantity: 200 } },
        { new: true },
      ).lean();
      const expectedResource = input;
      expectedResource.quantity += 200;
      expect(removeMongoKeys(updateResource)).toEqual(expectedResource);
    });
  });
});
