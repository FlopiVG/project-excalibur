import { getUserResources, updateUserResources } from './api_resources';

describe('resources api test', () => {
  it('should getUserResources return a promise', () => {
    expect(getUserResources()).toBeInstanceOf(Promise);
  });

  it('should updateUserResources return a promise', () => {
    expect(updateUserResources()).toBeInstanceOf(Promise);
  });
});
