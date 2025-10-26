import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/useAuth";
import Auth from "./components/auth/Auth";
import PersonalityTest from "./components/test/PersonalityTest";
import Results from "./components/results/Results";
import {
  analyzePersonality,
  getCareerRecommendations,
} from "./services/personalityService";
import "./App.css";

function AppContent() {
  const { user, isAuthenticated, loading, updateTestResults } = useAuth();
  const [setShowTest] = useState(false);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // Not authenticated - show login/signup
  if (!isAuthenticated) {
    return <Auth onSuccess={() => setShowTest(true)} />;
  }

  // Handle test completion
  const handleTestComplete = (answers) => {
    const analysis = analyzePersonality(answers);
    const recommendations = getCareerRecommendations(analysis, user.userType);

    updateTestResults({
      analysis,
      recommendations,
      completedAt: new Date().toISOString(),
    });
  };

  // User has completed test - show results
  if (user.hasCompletedTest && user.testResults) {
    return (
      <Results
        analysis={user.testResults.analysis}
        recommendations={user.testResults.recommendations}
      />
    );
  }

  // User needs to take test
  return <PersonalityTest onComplete={handleTestComplete} />;
}

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AppContent />
      </div>
    </AuthProvider>
  );
}

export default App;
