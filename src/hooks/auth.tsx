// eslint-disable-next-line object-curly-newline
import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface UserDB {
  id: string;
  name: string;
  displayName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  token: string;
  user: UserDB;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: UserDB;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@LaunchTrip:token');
    const user = localStorage.getItem('@LaunchTrip:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    const { token, user } = response.data;

    localStorage.setItem('@LaunchTrip:token', token);
    localStorage.setItem('@LaunchTrip:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@LaunchTrip:token');
    localStorage.removeItem('@LaunchTrip:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
