import score from './score';

it('computes the score', ()=>{
  const secret = [0, 0, 2, 3];

  const testCases = [
    [0, 0, 2, 3],
    [4, 4, 4, 4],
    [0, 0, 5, 5],
    [3, 2, 0, 0],
    [4, 4, 0, 0],
    [0, 2, 0, 0],
    [0, 0, 0, 0],
  ];

  const expectedOutcomes = [
    [4, 0],
    [0, 0],
    [2, 0],
    [0, 4],
    [0, 2],
    [1, 2],
    [2, 0],
  ];

  const actualOutcomes = testCases.map(score(secret));

  actualOutcomes.forEach((outcome, i)=> {
    expect(outcome).toEqual(expectedOutcomes[i])
  })
});
