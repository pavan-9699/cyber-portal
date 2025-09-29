import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { CyberTerms } from './components/CyberTerms';
import { Quiz } from './components/Quiz';
import { Videos } from './components/Videos';
import { Auth } from './components/Auth';
import { useAuth } from './contexts/AuthContext';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');
  const { user } = useAuth();

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onTabChange={setActiveTab} />;
      case 'terms':
        return <CyberTerms />;
      case 'quiz':
        return <Quiz />;
      case 'videos':
        return <Videos />;
      case 'auth':
        return user ? <Home onTabChange={setActiveTab} /> : <Auth />;
      default:
        return <Home onTabChange={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;