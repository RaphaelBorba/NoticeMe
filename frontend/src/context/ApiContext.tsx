import React, { useContext, useState } from 'react';

interface AuthContextType {
  token: string | null;
  userId: string | null;
  name: string | null;
  login: (token: string, userId: string, name: string) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return authContext;
};

const AuthProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  const login = (newToken: string, newUserId: string, newName: string) => {
    setToken(newToken);
    setUserId(newUserId);
    setName(newName);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    setName(null);
  };

  const authContextValue: AuthContextType = {
    token,
    userId,
    name,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;