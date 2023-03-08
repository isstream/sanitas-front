import { CustomFilter } from './filter-photos.pipe';

describe('CustomFilter', () => {
  it('create an instance', () => {
    const pipe = new CustomFilter();
    expect(pipe).toBeTruthy();
  });
});
