const { mapUpgradeCost } = require('../builds_utils');
const mockData = require('../__mocks__/builds_data');

describe('builds util test', () => {
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
  it('should mapUpgradeCost map build correctly', async () => {
    const mappedData = await mapUpgradeCost(inputData);

    expect(mappedData).toEqual(outputData);
  });
});
