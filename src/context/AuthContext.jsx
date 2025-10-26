import { useState, useEffect } from 'react';
import { AuthContext } from './useAuth';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password, userType) => {
    // Mock login - in production, this would call an API
    const mockUser = {
      id: Date.now(),
      email,
      userType, // 'student' or 'professional'
      name: email.split('@')[0],
      createdAt: new Date().toISOString(),
      hasCompletedTest: false,
      testResults: null
    };
    
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
    return mockUser;
  };

  const signup = (email, password, userType, name) => {
    // Mock signup
    const mockUser = {
      id: Date.now(),
      email,
      userType,
      name: name || email.split('@')[0],
      createdAt: new Date().toISOString(),
      hasCompletedTest: false,
      testResults: null
    };
    
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
    return mockUser;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const updateTestResults = (results) => {
    const updatedUser = {
      ...user,
      hasCompletedTest: true,
      testResults: results
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    updateTestResults,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
