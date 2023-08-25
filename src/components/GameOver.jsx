import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quizz';
import WellDone from '../assets/welldone.svg'

const GameOver = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='gameover'>
      <h2>Fim de jogo</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length}</p>
      <img src={WellDone} alt="" />
      <button onClick = {()=> dispatch({type: 'NEW_GAME'})}>Reiniciar</button>
    </div>
  )
}

export default GameOver