const { mapUpgradeCost } = require('./builds.utils');
const mockData = require('./__mocks__/builds.data');

describe('utils in builds', () => {
  let inputData;
  let outputData;

  beforeAll(() => {
    [inputData] = mockData;
    outputData = {
      ...inputData,
      upgradeCost: inputData.upgradeCost.map(data => ({
        _id: data._id,
        name: data.name,
        quantity: Math.floor(data.quantity * (inputData.level * data.multi)),
      })),
    };
  });
  it('should mapUpgradeCost return a promise', () => {
    expect(mapUpgradeCost(inputData[0])).toBeInstanceOf(Promise);
  });
  it('should mapUpgradeCost map build correctly', () =>
    mapUpgradeCost(inputData)
      .then((data) => {
        expect(data).toEqual(outputData);
      })
      .catch(error => expect(error).toBeFalsy()));
});
