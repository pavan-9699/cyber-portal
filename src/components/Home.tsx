import React from 'react';
import { Shield, Target, Award, Users, TrendingUp, Lock, BookOpen, Play } from 'lucide-react';

interface HomeProps {
  onTabChange: (tab: string) => void;
}

export function Home({ onTabChange }: HomeProps) {
  const features = [
    {
      icon: BookOpen,
      title: 'Cyber Terms Dictionary',
      description: 'Learn essential cybersecurity terminology with detailed explanations and real-world examples.',
      action: () => onTabChange('terms'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Gamified Quizzes',
      description: 'Test your knowledge with interactive quizzes and get personalized performance analytics.',
      action: () => onTabChange('quiz'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Play,
      title: 'Learning Videos',
      description: 'Watch expert-curated videos covering all aspects of cybersecurity awareness.',
      action: () => onTabChange('videos'),
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const stats = [
    { label: 'Security Topics', value: '25+', icon: Lock },
    { label: 'Quiz Questions', value: '100+', icon: Target },
    { label: 'Video Lessons', value: '20+', icon: Play },
    { label: 'Students Trained', value: '1000+', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-cyan-400 p-4 rounded-2xl shadow-2xl">
                <Shield className="h-16 w-16 text-blue-900" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Master <span className="text-cyan-400">Cybersecurity</span> Skills
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-12 max-w-3xl mx-auto">
              Your comprehensive portal for cybersecurity education. Learn, practice, and excel in digital security awareness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onTabChange('terms')}
                className="bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Learning
              </button>
              <button
                onClick={() => onTabChange('quiz')}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-900 font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                Take Quiz
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-cyan-400 opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-400 opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white opacity-10 rounded-full animate-ping"></div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Stay <span className="text-blue-600">Secure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform provides interactive learning experiences designed for modern cybersecurity education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="p-8">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <button
                      onClick={feature.action}
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-200"
                    >
                      Explore Now
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 text-cyan-200 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-cyan-200 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Strengthen Your Cyber Defense?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of students who have enhanced their cybersecurity awareness through our interactive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onTabChange('quiz')}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Take Assessment
            </button>
            <button
              onClick={() => onTabChange('videos')}
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              Watch Videos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}