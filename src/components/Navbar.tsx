import React from 'react';
import { Shield, Home, BookOpen, Gamepad as GamepadIcon, PlayCircle, LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const { user, signOut } = useAuth();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'terms', label: 'Cyber Terms', icon: BookOpen },
    { id: 'quiz', label: 'Gamified Quiz', icon: GamepadIcon },
    { id: 'videos', label: 'Videos', icon: PlayCircle },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-cyan-400 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-blue-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">CyberGuard</h1>
              <p className="text-xs text-cyan-200">Student Security Portal</p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-400 text-blue-900 shadow-lg'
                      : 'text-cyan-100 hover:bg-blue-700 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-cyan-200" />
                  <span className="text-cyan-100 text-sm font-medium">
                    {user.username}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition-colors duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Sign Out</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => onTabChange('auth')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === 'auth'
                    ? 'bg-cyan-400 text-blue-900 shadow-lg'
                    : 'text-cyan-100 hover:bg-blue-700 hover:text-white'
                }`}
              >
                <LogIn className="h-4 w-4" />
                <span className="font-medium">Sign In</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => onTabChange('menu')}
              className="text-cyan-100 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {activeTab === 'menu' && (
        <div className="md:hidden bg-blue-800 border-t border-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className="flex items-center space-x-3 text-cyan-100 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            {!user && (
              <button
                onClick={() => onTabChange('auth')}
                className="flex items-center space-x-3 text-cyan-100 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                <LogIn className="h-5 w-5" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}