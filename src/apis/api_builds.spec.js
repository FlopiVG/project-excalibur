import { userBuilds, userBuild, upgradeBuild } from './api_builds';

describe('api builds test', () => {
  it('should userBuilds return a promise', () => {
    expect(userBuilds()).toBeInstanceOf(Promise);
  });

  it('should userBuild return a promise', () => {
    expect(userBuild()).toBeInstanceOf(Promise);
  });

  it('should upgradeBuild return a promise', () => {
    expect(upgradeBuild()).toBeInstanceOf(Promise);
  });
});
