const mongoose = require('mongoose');
const { removeMongoKeys } = require('../../utils/general');

const MONGO_URI_TEST = 'mongodb://127.0.0.1:27017/proyect-excalibur-test';
mongoose.connect(MONGO_URI_TEST);
const Build = require('../builds.model');

describe('builds model test', () => {
  let input;
  beforeAll(async () => {
    await Build.remove({});

    input = {
      name: 'foo',
      description: 'foo',
      imgSrc: 'foo',
      level: 1,
      upgradeCost: [
        {
          name: 'upFoo',
          quantity: 100,
          multi: 0.1,
        },
      ],
    };
  });

  afterEach(async () => {
    await Build.remove({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('has a module', () => {
    expect(Build).toBeDefined();
  });

  describe('get builds', () => {
    beforeEach(async () => {
      await Build.insertMany(input, input);
    });

    it('should get builds', async () => {
      const builds = await Build.find({}).lean();

      expect(removeMongoKeys(builds)).toContainEqual(input);
    });
  });

  describe('get build', () => {
    beforeEach(async () => {
      await new Build(input).save();
    });

    it('should get build', async () => {
      const build = await Build.findOne({ name: 'foo' }).lean();

      expect(removeMongoKeys(build)).toEqual(input);
    });
  });

  describe('update build', () => {
    beforeEach(async () => {
      await new Build(input).save();
    });

    it('should update build', async () => {
      const updateBuild = await Build.findOneAndUpdate(
        { name: 'foo' },
        { $inc: { level: 1 } },
        { new: true },
      ).lean();
      const expectedBuild = input;
      expectedBuild.level = 2;

      expect(removeMongoKeys(updateBuild)).toEqual(expectedBuild);
    });
  });
});
