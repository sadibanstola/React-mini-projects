import React, { useState, useEffect } from 'react';

const FakePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log('Error fetching posts:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6 animate-fade-in-down">📚 Fake Posts</h1>

      {posts.length === 0 ? (
        <p className="text-gray-600 text-lg animate-pulse">Loading posts...</p>
      ) : (
        <ul className="w-full max-w-2xl space-y-4">
          {posts.map(post => (
            <li 
              key={post.id} 
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.body ? post.body : 'No content available.'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FakePosts;
