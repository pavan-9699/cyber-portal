import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

interface User {
  email: string;
  username: string;
  token: string; 
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    const res = await axios.post("https://cyber-backend-psi.vercel.app/signin", {
      email,
      password,
    });

    const userData: User = {
      ...res.data.user,
      token: res.data.token,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setLoading(false);
  };

  const signUp = async (email: string, password: string, username: string) => {
    setLoading(true);
    await axios.post("https://cyber-backend-psi.vercel.app/signup", {
      email,
      password,
      username,
    });
    setLoading(false);
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
