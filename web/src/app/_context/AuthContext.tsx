"use client"

import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie, setCookie, deleteCookie } from '../_utils/cookieUtils';

interface AuthContextType {
  isSignin: boolean;
  login: (username: string, password: string) => Promise<void>;
  signout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isSignin, setIsSignin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getCookie('authToken');
    setIsSignin(!!token);
  }, []);

  const login = async (username: string, password: string) => {
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      setCookie('authToken', data.token, 7);
      setIsSignin(true);
      router.push('/main');
    } else {
      const data = await res.json();
      throw new Error(data.message);
    }
  };

  const signout = async () => {
    await fetch('/api/auth/signout', {
      method: 'POST',
    });
    deleteCookie('authToken');
    setIsSignin(false);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ isSignin, login, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};