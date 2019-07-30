import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { actions } from './store';
import CodeInput from './CodeInput';

const App = ({ code, guesses, scores, setCode, guess, newGame })=> (
    <div className="App">
      <div className='code-container'>
        <CodeInput code={code} onChange={setCode} colors={6}/>
      </div>
      { (!scores.length || (scores[scores.length - 1][0] !== 4)) ? (
        <button className='guess' onClick={guess}>GUESS</button>
      ) : (
        <button className='new-game' onClick={newGame}>NEW GAME</button>
      )}
      <div className="guesses">
        {guesses.map((guess, i)=>
            <div className='guess-container' key={i}>
              {guess.map((digit, di)=> (
                <div className={'dot-'+digit} key={di}/>
              ))}
            </div>
          )}
          </div>
          <div className='scores'>
          {scores.map((score, i)=>
            <div className='score-container' key={i}>
              {[...Array(score[0])].map((o, bi)=>(
                <div className='black' key={bi}/>
              ))}
              {[...Array(score[1])].map((o, wi)=>(
                <div className='white' key={wi}/>
              ))}
            </div>
          )}
      </div>
    </div>
  );

export default connect (state=> state, actions)(App);
