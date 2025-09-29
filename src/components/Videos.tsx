import React, { useState } from 'react';
import { Play, Clock, BookOpen, CheckCircle, Filter } from 'lucide-react';
import { videoContent } from '../data/videoContent';

export function Videos() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [watchedVideos, setWatchedVideos] = useState<Set<string>>(new Set());

  const categories = ['all', ...new Set(videoContent.map(video => video.category))];
  
  const filteredVideos = videoContent.filter(video => 
    selectedCategory === 'all' || video.category === selectedCategory
  );

  const toggleWatched = (videoId: string) => {
    const newWatched = new Set(watchedVideos);
    if (newWatched.has(videoId)) {
      newWatched.delete(videoId);
    } else {
      newWatched.add(videoId);
    }
    setWatchedVideos(newWatched);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-2xl inline-block mb-6">
            <Play className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cybersecurity <span className="text-purple-600">Video Library</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master cybersecurity concepts with our comprehensive video course library. Expert-curated content designed for effective learning.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600">{videoContent.length}</div>
              <div className="text-sm text-gray-600">Total Videos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{categories.length - 1}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{watchedVideos.size}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">
                {Math.round((watchedVideos.size / videoContent.length) * 100)}%
              </div>
              <div className="text-sm text-gray-600">Progress</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700 font-medium">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'All Videos' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        {watchedVideos.size > 0 && (
          <div className="mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-semibold text-gray-900">Overall Progress</span>
                <span className="text-sm font-medium text-purple-600">
                  {watchedVideos.size} of {videoContent.length} completed
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(watchedVideos.size / videoContent.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredVideos.map(video => {
            const isWatched = watchedVideos.has(video.id);
            
            return (
              <div
                key={video.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                  isWatched ? 'ring-2 ring-green-500' : ''
                }`}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gray-900">
                  <iframe
                    src={video.video_url}
                    title={video.title}
                    className="w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                  
                  {isWatched && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white rounded-full p-2">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  )}
                </div>

                {/* Video Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                      {video.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {video.duration}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {video.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {video.description}
                  </p>

                  {/* Mark as Watched Button */}
                  <button
                    onClick={() => toggleWatched(video.id)}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 mb-4 ${
                      isWatched
                        ? 'bg-green-100 text-green-800 hover:bg-green-200'
                        : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                    }`}
                  >
                    {isWatched ? (
                      <span className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Completed
                      </span>
                    ) : (
                      'Mark as Watched'
                    )}
                  </button>

                  {/* Summary Section */}
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                      Course Summary
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">{video.summary}</p>

                    <h5 className="font-semibold text-gray-900 mb-2 text-sm">Key Learning Points:</h5>
                    <ul className="space-y-1">
                      {video.key_points.slice(0, 3).map((point, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-start">
                          <div className="bg-purple-200 rounded-full w-1.5 h-1.5 mt-2 mr-2 flex-shrink-0"></div>
                          <span>{point}</span>
                        </li>
                      ))}
                      {video.key_points.length > 3 && (
                        <li className="text-xs text-purple-600 font-medium">
                          +{video.key_points.length - 3} more topics covered...
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <Play className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No videos found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}

        {/* Course Completion Certificate */}
        {watchedVideos.size === videoContent.length && watchedVideos.size > 0 && (
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8 text-center">
            <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎉 Course Complete!</h2>
            <p className="text-lg text-gray-700 mb-6">
              Congratulations! You've completed all cybersecurity training videos. You now have comprehensive knowledge across all security domains.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
              <h3 className="font-bold text-gray-900 mb-2">Certificate of Completion</h3>
              <p className="text-sm text-gray-600 mb-4">Cybersecurity Awareness Training</p>
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-500">Course Progress</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}