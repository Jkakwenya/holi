import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Results.css';

const Results = ({ analysis, recommendations }) => {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const { user, logout } = useAuth();

  const handleCareerClick = (career) => {
    setSelectedCareer(career);
  };

  const handleClose = () => {
    setSelectedCareer(null);
  };

  const handleRetakeTest = () => {
    if (window.confirm('Are you sure you want to retake the test? Your current results will be lost.')) {
      window.location.reload();
    }
  };

  return (
    <div className="results-container">
      <div className="results-header">
        <div className="header-content">
          <h1>Your Career Path Recommendations</h1>
          <div className="header-actions">
            <button className="retake-button" onClick={handleRetakeTest}>
              Retake Test
            </button>
            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="results-content">
        {/* Personality Profile Section */}
        <div className="profile-section">
          <div className="profile-card">
            <h2>Your Personality Profile</h2>
            <div className="personality-type">
              <span className="type-badge">{analysis.profile.personalityType.type}</span>
              <p className="type-description">{analysis.profile.personalityType.description}</p>
            </div>

            <div className="traits-section">
              <h3>Your Top Strengths</h3>
              <div className="traits-grid">
                {analysis.traits.slice(0, 6).map((trait, index) => (
                  <div key={index} className="trait-chip">
                    {trait.charAt(0).toUpperCase() + trait.slice(1).replace('-', ' ')}
                  </div>
                ))}
              </div>
            </div>

            {analysis.profile.summary.length > 0 && (
              <div className="strengths-details">
                <h3>What This Means for You</h3>
                {analysis.profile.summary.map((item, index) => (
                  <div key={index} className="strength-item">
                    <p className="strength-text">
                      <strong>{item.strength}</strong> {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Career Recommendations */}
        <div className="recommendations-section">
          <h2>
            Recommended Career Paths
            <span className="user-badge">for {user.userType}s</span>
          </h2>
          
          <div className="careers-grid">
            {recommendations.map((career) => (
              <div
                key={career.id}
                className="career-card"
                onClick={() => handleCareerClick(career)}
              >
                <div className="career-header">
                  <h3>{career.title}</h3>
                  <div className="match-badge">{career.matchScore}% Match</div>
                </div>
                
                <p className="career-description">{career.description}</p>
                
                <div className="career-highlights">
                  <div className="highlight">
                    <span className="highlight-label">Growth Potential</span>
                    <span className="highlight-value">{career.growthPotential}</span>
                  </div>
                  <div className="highlight">
                    <span className="highlight-label">Salary Range</span>
                    <span className="highlight-value">{career.averageSalary}</span>
                  </div>
                </div>

                <div className="matching-traits">
                  {career.matchingTraits.slice(0, 3).map((trait, index) => (
                    <span key={index} className="trait-tag">
                      {trait}
                    </span>
                  ))}
                </div>

                <button className="learn-more-button">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Career Detail Modal */}
      {selectedCareer && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleClose}>×</button>
            
            <div className="modal-header">
              <h2>{selectedCareer.title}</h2>
              <div className="match-badge large">{selectedCareer.matchScore}% Match</div>
            </div>

            <div className="modal-body">
              <section className="modal-section">
                <h3>Why This Path Fits You</h3>
                <p className="personalized-insight">{selectedCareer.personalizedInsight}</p>
              </section>

              <section className="modal-section">
                <h3>Your Matching Strengths</h3>
                <div className="modal-traits">
                  {selectedCareer.matchingTraits.map((trait, index) => (
                    <span key={index} className="trait-tag large">
                      {trait}
                    </span>
                  ))}
                </div>
              </section>

              <section className="modal-section">
                <h3>Key Skills to Develop</h3>
                <div className="skills-list">
                  {selectedCareer.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <span className="skill-icon">✓</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </section>

              {user.userType === 'student' ? (
                <section className="modal-section">
                  <h3>Educational Pathways</h3>
                  <ul className="pathway-list">
                    {selectedCareer.educationPath.map((path, index) => (
                      <li key={index}>{path}</li>
                    ))}
                  </ul>
                </section>
              ) : (
                <section className="modal-section">
                  <h3>Next Steps to Transition</h3>
                  <ul className="pathway-list">
                    {selectedCareer.nextSteps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                  {selectedCareer.transitionFrom && (
                    <p className="transition-note">
                      <strong>Common transitions from:</strong> {selectedCareer.transitionFrom.join(', ')}
                    </p>
                  )}
                </section>
              )}

              <section className="modal-section">
                <h3>Career Overview</h3>
                <div className="overview-grid">
                  <div className="overview-item">
                    <span className="overview-label">Growth Potential</span>
                    <span className="overview-value">{selectedCareer.growthPotential}</span>
                  </div>
                  <div className="overview-item">
                    <span className="overview-label">Salary Range</span>
                    <span className="overview-value">{selectedCareer.averageSalary}</span>
                  </div>
                  <div className="overview-item">
                    <span className="overview-label">Industries</span>
                    <span className="overview-value">{selectedCareer.industries.join(', ')}</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
