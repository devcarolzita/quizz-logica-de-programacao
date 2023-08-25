import './App.css';
import Welcome from './components/Welcome';
import { useContext } from 'react';
import {QuizContext} from './context/quizz';
import Question from './components/Question';

import { useEffect } from 'react';
import GameOver from './components/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  
  useEffect(() => {
    dispatch({type: 'REORDER_QUESTIONS'})
  },[] )

  return (
    <>
      <div>
        <h1>Quizz app</h1>
        {quizState.gameStage === 'Start' && <Welcome />} 
        {quizState.gameStage === 'Playing' && <Question />} 
        {quizState.gameStage === 'End' && <GameOver />} 

      </div>
    </>
  )
}

export default App
