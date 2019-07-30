import { createStore, applyMiddleware } from 'redux';
import score from './score';

export const initState = {
  secret: [0, 0, 2, 3],
  code: [1, 2, 3, 4],
  guesses: [],
  scores: [],
};

export const reducers = {
  setCode: (state, action)=> ({
    ...state,
    code: action.payload,
  }),
  guess: (state, action)=> ({
    ...state,
    guesses: [...state.guesses, state.code],
    scores: [...state.scores, score(state.secret)(state.code)]
  }),
  newGame: (state, action)=> ({
    ...state,
    scores: [],
    guesses: [],
    secret: [1,2,3,4].map(()=> Math.floor(Math.random()*6)),
  })
};

export const actions = {
  setCode: code => ({
    type: 'setCode',
    payload: code,
  }),
  guess: ()=> ({ type: 'guess'}),
  newGame: ()=>({ type: 'newGame'}),
};

export const identity = i => i;

export const reducer = (state, action)=> (
  reducers[ action.type] || identity
)(state, action);

export default createStore(reducer, initState, applyMiddleware(
  store => next => action => {
    console.log(action);
    return next(action);
  }
));
