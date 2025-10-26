import { useState } from 'react';
import { personalityQuestions } from '../../data/personalityQuestions';
import './PersonalityTest.css';

const PersonalityTest = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    if (currentQuestion < personalityQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Test complete
      onComplete(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      setSelectedOption(answers[currentQuestion - 1]);
    }
  };

  const progress = ((currentQuestion + 1) / personalityQuestions.length) * 100;

  if (!isStarted) {
    return (
      <div className="test-container">
        <div className="test-intro">
          <div className="intro-icon">🧠</div>
          <h1>Personality Assessment</h1>
          <p className="intro-description">
            Take our comprehensive personality assessment to discover career paths that align with your natural strengths and preferences.
          </p>
          
          <div className="intro-features">
            <div className="feature">
              <span className="feature-icon">⏱️</span>
              <div>
                <h3>10 Minutes</h3>
                <p>Quick and insightful assessment</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">🎯</span>
              <div>
                <h3>Personalized</h3>
                <p>Tailored recommendations for you</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">📊</span>
              <div>
                <h3>Detailed Analysis</h3>
                <p>Deep insights into your personality</p>
              </div>
            </div>
          </div>

          <div className="intro-steps">
            <h3>How it works:</h3>
            <ol>
              <li>Answer {personalityQuestions.length} carefully crafted questions</li>
              <li>Be honest - there are no right or wrong answers</li>
              <li>Receive personalized career recommendations</li>
              <li>Explore detailed insights about each path</li>
            </ol>
          </div>

          <button className="start-button" onClick={handleStart}>
            Begin Assessment
          </button>
        </div>
      </div>
    );
  }

  const question = personalityQuestions[currentQuestion];

  return (
    <div className="test-container">
      <div className="test-card">
        <div className="test-header">
          <div className="progress-info">
            <span className="question-counter">
              Question {currentQuestion + 1} of {personalityQuestions.length}
            </span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="question-section">
          <h2 className="question-text">{question.question}</h2>
          
          <div className="options-grid">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`option-card ${selectedOption?.value === option.value ? 'selected' : ''}`}
                onClick={() => handleSelectOption(option)}
              >
                <div className="option-content">
                  <span className="option-label">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="test-navigation">
          <button
            className="nav-button secondary"
            onClick={handleBack}
            disabled={currentQuestion === 0}
          >
            ← Back
          </button>
          <button
            className="nav-button primary"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            {currentQuestion === personalityQuestions.length - 1 ? 'Complete' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalityTest;
