import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Fetch 10 articles from NewsAPI
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p'
        );
        const data = await response.json();

        if (data.status === 'ok' && data.articles) {
          // Filter articles with images and take up to 10
          const filteredArticles = data.articles
            .filter((article) => article.urlToImage)
            .slice(0, 10);
          setArticles(filteredArticles);

          // If fewer than 10 articles, supplement with fallback data
          if (filteredArticles.length < 10) {
            const fallbackArticles = [
              {
                url: 'https://example.com/news1',
                urlToImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c',
                title: 'Technology Breakthrough Unveiled',
                source: { name: 'Tech Times' },
                publishedAt: '2025-04-30T10:00:00Z',
              },
              {
                url: 'https://example.com/news2',
                urlToImage: 'https://images.unsplash.com/photo-1495020689067-958852a7765e',
                title: 'Global Events: Major Update',
                source: { name: 'World News' },
                publishedAt: '2025-04-30T09:30:00Z',
              },
              {
                url: 'https://example.com/news3',
                urlToImage: 'https://images.unsplash.com/photo-1585829365295-2a9209757c73',
                title: 'Science Advances in 2025',
                source: { name: 'Science Daily' },
                publishedAt: '2025-04-30T09:00:00Z',
              },
              {
                url: 'https://example.com/news4',
                urlToImage: 'https://images.unsplash.com/photo-1617791160588-241658c0f566',
                title: 'Economic Trends to Watch',
                source: { name: 'Finance Today' },
                publishedAt: '2025-04-30T08:45:00Z',
              },
              {
                url: 'https://example.com/news5',
                urlToImage: 'https://images.unsplash.com/photo-1503694978374-8a2b9bd6815c',
                title: 'Climate Action Initiatives',
                source: { name: 'Eco News' },
                publishedAt: '2025-04-30T08:30:00Z',
              },
              {
                url: 'https://example.com/news6',
                urlToImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
                title: 'AI Revolution Continues',
                source: { name: 'Tech Insider' },
                publishedAt: '2025-04-30T08:15:00Z',
              },
              {
                url: 'https://example.com/news7',
                urlToImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
                title: 'Travel Destinations for 2025',
                source: { name: 'Travel Weekly' },
                publishedAt: '2025-04-30T08:00:00Z',
              },
              {
                url: 'https://example.com/news8',
                urlToImage: 'https://images.unsplash.com/photo-1517245386807-9a4a0a7c7c9e',
                title: 'Health Innovations Unveiled',
                source: { name: 'Health Today' },
                publishedAt: '2025-04-30T07:45:00Z',
              },
            ];
            setArticles([...filteredArticles, ...fallbackArticles].slice(0, 10));
          }
        } else {
          // Fallback to mock data if API fails
          setArticles([
            {
              url: 'https://example.com/news1',
              urlToImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c',
              title: 'Technology Breakthrough Unveiled',
              source: { name: 'Tech Times' },
              publishedAt: '2025-04-30T10:00:00Z',
            },
            {
              url: 'https://example.com/news2',
              urlToImage: 'https://images.unsplash.com/photo-1495020689067-958852a7765e',
              title: 'Global Events: Major Update',
              source: { name: 'World News' },
              publishedAt: '2025-04-30T09:30:00Z',
            },
            {
              url: 'https://example.com/news3',
              urlToImage: 'https://images.unsplash.com/photo-1585829365295-2a9209757c73',
              title: 'Science Advances in 2025',
              source: { name: 'Science Daily' },
              publishedAt: '2025-04-30T09:00:00Z',
            },
            {
              url: 'https://example.com/news4',
              urlToImage: 'https://images.unsplash.com/photo-1617791160588-241658c0f566',
              title: 'Economic Trends to Watch',
              source: { name: 'Finance Today' },
              publishedAt: '2025-04-30T08:45:00Z',
            },
            {
              url: 'https://example.com/news5',
              urlToImage: 'https://images.unsplash.com/photo-1503694978374-8a2b9bd6815c',
              title: 'Climate Action Initiatives',
              source: { name: 'Eco News' },
              publishedAt: '2025-04-30T08:30:00Z',
            },
            {
              url: 'https://example.com/news6',
              urlToImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
              title: 'AI Revolution Continues',
              source: { name: 'Tech Insider' },
              publishedAt: '2025-04-30T08:15:00Z',
            },
            {
              url: 'https://example.com/news7',
              urlToImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
              title: 'Travel Destinations for 2025',
              source: { name: 'Travel Weekly' },
              publishedAt: '2025-04-30T08:00:00Z',
            },
            {
              url: 'https://example.com/news8',
              urlToImage: 'https://images.unsplash.com/photo-1517245386807-9a4a0a7c7c9e',
              title: 'Health Innovations Unveiled',
              source: { name: 'Health Today' },
              publishedAt: '2025-04-30T07:45:00Z',
            },
            {
              url: 'https://example.com/news9',
              urlToImage: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
              title: 'Space Exploration Milestones',
              source: { name: 'Space News' },
              publishedAt: '2025-04-30T07:30:00Z',
            },
            {
              url: 'https://example.com/news10',
              urlToImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
              title: 'Cultural Events to Watch',
              source: { name: 'Culture Today' },
              publishedAt: '2025-04-30T07:15:00Z',
            },
          ]);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        // Fallback to mock data
        setArticles([
          {
            url: 'https://example.com/news1',
            urlToImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c',
            title: 'Technology Breakthrough Unveiled',
            source: { name: 'Tech Times' },
            publishedAt: '2025-04-30T10:00:00Z',
          },
          {
            url: 'https://example.com/news2',
            urlToImage: 'https://images.unsplash.com/photo-1495020689067-958852a7765e',
            title: 'Global Events: Major Update',
            source: { name: 'World News' },
            publishedAt: '2025-04-30T09:30:00Z',
          },
          {
            url: 'https://example.com/news3',
            urlToImage: 'https://images.unsplash.com/photo-1585829365295-2a9209757c73',
            title: 'Science Advances in 2025',
            source: { name: 'Science Daily' },
            publishedAt: '2025-04-30T09:00:00Z',
          },
          {
            url: 'https://example.com/news4',
            urlToImage: 'https://images.unsplash.com/photo-1617791160588-241658c0f566',
            title: 'Economic Trends to Watch',
            source: { name: 'Finance Today' },
            publishedAt: '2025-04-30T08:45:00Z',
          },
          {
            url: 'https://example.com/news5',
            urlToImage: 'https://images.unsplash.com/photo-1503694978374-8a2b9bd6815c',
            title: 'Climate Action Initiatives',
            source: { name: 'Eco News' },
            publishedAt: '2025-04-30T08:30:00Z',
          },
          {
            url: 'https://example.com/news6',
            urlToImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
            title: 'AI Revolution Continues',
            source: { name: 'Tech Insider' },
            publishedAt: '2025-04-30T08:15:00Z',
          },
          {
            url: 'https://example.com/news7',
            urlToImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
            title: 'Travel Destinations for 2025',
            source: { name: 'Travel Weekly' },
            publishedAt: '2025-04-30T08:00:00Z',
          },
          {
            url: 'https://example.com/news8',
            urlToImage: 'https://images.unsplash.com/photo-1517245386807-9a4a0a7c7c9e',
            title: 'Health Innovations Unveiled',
            source: { name: 'Health Today' },
            publishedAt: '2025-04-30T07:45:00Z',
          },
          {
            url: 'https://example.com/news9',
            urlToImage: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
            title: 'Space Exploration Milestones',
            source: { name: 'Space News' },
            publishedAt: '2025-04-30T07:30:00Z',
          },
          {
            url: 'https://example.com/news10',
            urlToImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
            title: 'Cultural Events to Watch',
            source: { name: 'Culture Today' },
            publishedAt: '2025-04-30T07:15:00Z',
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-rose-50 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-5xl md:text-6xl font-serif text-center text-gray-900 mb-20 tracking-tight font-light"
      >
        Curated News
      </motion.h1>

      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-600 text-xl font-light italic"
        >
          <svg
            className="animate-spin h-8 w-8 mx-auto text-indigo-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          <span className="mt-4 block">Fetching the latest stories...</span>
        </motion.div>
      ) : articles.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-600 text-xl font-light italic"
        >
          No news available at the moment.
        </motion.p>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {articles.map((article, index) => (
                <motion.div
                  key={article.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                  className="group relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={article.urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c'}
                      alt={article.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-4 w-full">
                        <p className="text-white text-sm font-semibold tracking-wide uppercase">
                          {article.source.name}
                        </p>
                        <p className="text-white text-base font-medium mt-1 line-clamp-2">
                          {article.title}
                        </p>
                        <p className="text-gray-300 text-xs mt-2">
                          {new Date(article.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-800 text-base font-medium line-clamp-2">
                        {article.title}
                      </p>
                      <p className="text-gray-500 text-xs mt-2 uppercase tracking-wide">
                        {article.source.name}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsFeed;