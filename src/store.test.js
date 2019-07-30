import store, { actions, reducers } from './store';

it('boots the store', ()=> {
  const initState = store.getState();

  expect(typeof initState).toEqual('object');
});

it('makes a new game', ()=> {
  const initState = store.getState();

  expect( initState.scores ).toHaveLength(0);

  const guessAction = actions.guess();
  const nextState = reducers.guess( initState, guessAction );

  expect(nextState.scores).toHaveLength(1);

  const newGameAction = actions.newGame();
  const newGameState = reducers.newGame( nextState, newGameAction);

  expect( newGameState.scores).toHaveLength(0);
  expect( newGameState.guesses).toHaveLength(0);
  expect( newGameState.secret).not.toEqual( initState.secret);
})
