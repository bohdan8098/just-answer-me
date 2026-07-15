import { useState } from 'react';

const initialStories = [
  {
    id: 1,
    title: "The Memory Jar",
    text: "My most cherished possession is technically a collection within a glass jar. Every time something wonderful happens — a successful project, a lovely evening, a moment of profound gratitude — I write it on a small slip of paper and put it in the jar. Opening it on a tough day is a guaranteed mood-booster, a tangible collection of happiness.",
    questions: [
      "If you were to start a 'Memory Jar' today, what is the most recent positive thing you would write down to put inside?"
    ]
  },
  {
    id: 2,
    title: "The Lemon Secret Agent",
    text: "You can write secret messages using lemon juice as invisible ink. The 'ink' disappears when it dries, but when you hold the paper near a lightbulb or heat source, the acid oxidizes and turns brown, revealing the message.",
    questions: [
      "If you were a secret agent, what would your code name be, and what would your first mission involve?"
    ]
  },
  {
    id: 3,
    title: "The Story of the Two Woodcutters",
    text: "Two woodcutters were in a competition. One worked all day without stopping. The other took a break every hour to talk to an old, experienced woodcutter. At the end of the day, the second woodcutter had a much larger pile of wood. The mentor hadn't helped him cut; he had reminded him to sharpen his axe during the breaks.",
    questions: [
      "In your daily life, what does 'sharpening your axe' look like to you?"
    ]
  },
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function next() {
    setCurrentIndex(currentIndex + 1);
  }

  function back() {
    setCurrentIndex(currentIndex - 1);
  }

  const currentStory = initialStories[currentIndex];

  return (
    <main className="app-container">
      <article className="story-card">
        <header className="story-card__header">
          <span className="story-card__counter">
            Story {currentIndex + 1} of {initialStories.length}
          </span>
          <h1 className="story-card__title">{currentStory.title}</h1>
        </header>

        <div className="story-card__body">
          <p className="story-card__text">{currentStory.text}</p>
        </div>

        <footer className="story-card__questions">
          <h2 className="story-card__questions-title">Question to answer:</h2>
          <p className="story-card__question-text">{currentStory.questions[0]}</p>
        </footer>
      </article>

      <div className="navigation">
        <button className="btn btn--secondary" onClick={back} disabled={currentIndex === 0}>
          Back
        </button>
        <button className="btn btn--primary" onClick={next} disabled={currentIndex === initialStories.length - 1}>
          Next
        </button>
      </div>
    </main>
  );
}

export default App;
