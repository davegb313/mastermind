export default secret => guess => {
  // compute and return score
  const matches = guess.filter((guessDigit, i)=>(
    guessDigit === secret[i]
  )).length;

  const guessRemainder = guess.filter((guessDigit, i)=>(
    guessDigit !== secret[i]
  ));

  const secretRemainder = secret.filter((secretDigit, i)=>(
    secretDigit !== guess[i]
  ));

  const guessBins = [0, 1, 2, 3, 4, 5].map(d=> (
    guessRemainder.filter(guessDigit=> (
      guessDigit === d
    )).length
  ));

  const secretBins = [0, 1, 2, 3, 4, 5].map(d=> (
    secretRemainder.filter(secretDigit=> (
      secretDigit === d
    )).length
  ));
  
  const inexactMatches = guessBins.reduce((total, guessBin, d)=>(
    total + Math.min( guessBin, secretBins[d])
  ), 0);

  return [matches, inexactMatches];
};
