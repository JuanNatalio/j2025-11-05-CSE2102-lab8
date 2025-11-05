import scoreController from './scoreController';

describe('scoreController', () => {
  beforeEach(() => {
    scoreController.reset();
  });

  test('saveScore and getScore work', () => {
    scoreController.saveScore(2, 3);
    const s = scoreController.getScore();
    expect(s.score).toBe(2);
    expect(s.count).toBe(3);
  });

  test('reset sets values to zero', () => {
    scoreController.saveScore(1, 2);
    scoreController.reset();
    const s = scoreController.getScore();
    expect(s.score).toBe(0);
    expect(s.count).toBe(0);
  });
});
