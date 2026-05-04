import React, { useEffect, useState } from 'react';
import { getWpPosts } from '../lib/wpService';
import Header from '../components/Header';

const TestWPPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getWpPosts();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold text-green-800 mb-8">Test Connexion WordPress</h1>
        
        {loading ? (
          <p>Chargement des articles de danynaturalconcept.org...</p>
        ) : (
          <div className="grid gap-6">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
                  <h2 className="text-xl font-semibold mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  <div className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium hover:underline"
                  >
                    Lire sur le site original →
                  </a>
                </div>
              ))
            ) : (
              <p className="text-red-500">Aucun article trouvé ou API bloquée.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default TestWPPage;
