"use client"

import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie, setCookie, deleteCookie } from '../_utils/cookieUtils';

interface AuthContextType {
  isSignin: boolean;
  signin: (username: string, password: string) => Promise<void>;
  signout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const [isSignin, setIsSignin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/validate-token', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
          setIsSignin(true);
        } else {
          router.push('/');
        }
      } catch (error) {
        console.error('Failed to validate token', error);
      }
    };
    checkAuth();
  }, [router]);

  const signin = async (username: string, password: string) => {
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      setIsSignin(true);
      router.push('/main');
    } else {
      const data = await res.json();
      throw new Error(data.message);
    }
  };

  const signout = async () => {
    const res = await fetch('/api/auth/signout', {
      method: 'POST',
    });

    if(res.ok) {
      setIsSignin(false);
      setUser(null);
      router.push("/");
    } else {
      const data = await res.json();
      throw new Error(data.message);
    }   
  };

  return (
    <AuthContext.Provider value={{ isSignin, signin, signout }}>
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