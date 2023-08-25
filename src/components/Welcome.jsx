import { useContext } from 'react';
import { QuizContext } from '../context/quizz';

import Quiz from '../assets/quiz.svg';

import './Welcome.css';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id='welcome'>
      <h2>Boas vindas!</h2>
      <p>Clique no botão abaixo para começar</p>
      <button onClick={() => dispatch({type: 'CHANGE_STATE'})}>Iniciar</button>
      <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}

export default Welcome