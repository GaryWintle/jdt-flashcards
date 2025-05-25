import { useState } from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: '緊急',
    answer: 'きんきゅう - Emergency',
  },
  {
    id: 7336,
    question: '右左折',
    answer: 'うさせつ - Turn right or left',
  },
  {
    id: 8832,
    question: '免許証',
    answer: 'めんきょしょう - License ex. Drivers License',
  },
  {
    id: 1297,
    question: '有害物質',
    answer: 'ゆうがいぶっしつ - Hazardous Substance/Material',
  },
  {
    id: 9103,
    question: '注意',
    answer: 'ちゅうい - Attention/Caution',
  },
  {
    id: 2002,
    question: '迷惑',
    answer: 'めいわく - Bothersome/Annoyance',
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <>
      <h1>To Show Cub 🧡</h1>
      <div className="flashcards">
        {questions.map((question) => (
          <div
            key={question.id}
            onClick={() => handleClick(question.id)}
            className={question.id === selectedId ? 'selected' : ''}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
