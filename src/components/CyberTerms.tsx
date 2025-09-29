import React, { useState } from 'react';
import { Search, Shield, AlertTriangle, Lock, Globe, Smartphone, Code, Users } from 'lucide-react';
import { cyberTerms } from '../data/cyberTerms';

const categoryIcons = {
  'Social Engineering': Users,
  'Malicious Software': AlertTriangle,
  'Authentication': Lock,
  'Network Attacks': Globe,
  'Web Security': Code,
  'Mobile Security': Smartphone,
  'Security Principles': Shield
};

const categoryColors = {
  'Social Engineering': 'from-red-500 to-red-600',
  'Malicious Software': 'from-orange-500 to-orange-600',
  'Authentication': 'from-blue-500 to-blue-600',
  'Network Attacks': 'from-purple-500 to-purple-600',
  'Web Security': 'from-green-500 to-green-600',
  'Mobile Security': 'from-pink-500 to-pink-600',
  'Security Principles': 'from-indigo-500 to-indigo-600'
};

export function CyberTerms() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  const categories = ['all', ...new Set(cyberTerms.map(term => term.category))];

  const filteredTerms = cyberTerms.filter(term => {
    const matchesSearch = term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const selectedTermData = selectedTerm ? cyberTerms.find(t => t.id === selectedTerm) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cybersecurity <span className="text-blue-600">Terms Dictionary</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the language of cybersecurity with comprehensive definitions, examples, and prevention strategies.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search cybersecurity terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Terms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTerms.map(term => {
            const IconComponent = categoryIcons[term.category as keyof typeof categoryIcons] || Shield;
            const colorClass = categoryColors[term.category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600';
            
            return (
              <div
                key={term.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100"
                onClick={() => setSelectedTerm(term.id)}
              >
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${colorClass} mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{term.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{term.definition}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {term.category}
                    </span>
                    <span className="text-blue-600 text-sm font-medium hover:underline">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed View Modal */}
        {selectedTermData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl max-h-screen overflow-y-auto shadow-2xl">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColors[selectedTermData.category as keyof typeof categoryColors]}`}>
                    {React.createElement(categoryIcons[selectedTermData.category as keyof typeof categoryIcons] || Shield, {
                      className: "h-6 w-6 text-white"
                    })}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedTermData.title}</h2>
                    <p className="text-sm text-blue-600 font-medium">{selectedTermData.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTerm(null)}
                  className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-8">
                {/* Definition */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Definition</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedTermData.definition}</p>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Detailed Description</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedTermData.description}</p>
                </div>

                {/* Examples */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-World Examples</h3>
                  <ul className="space-y-2">
                    {selectedTermData.examples.map((example, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="bg-red-100 text-red-600 rounded-full p-1 mt-0.5">
                          <AlertTriangle className="h-3 w-3" />
                        </div>
                        <span className="text-gray-700">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prevention */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Prevention Strategies</h3>
                  <ul className="space-y-2">
                    {selectedTermData.prevention.map((strategy, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-600 rounded-full p-1 mt-0.5">
                          <Shield className="h-3 w-3" />
                        </div>
                        <span className="text-gray-700">{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No terms found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}