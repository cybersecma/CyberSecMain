import { BrowserRouter as Router, Routes, Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';
import CommunityPage from './pages/CommunityPage';
import SearchPage from './pages/SearchPage';
import ArticlesPage from './pages/ArticlesPage';
import NotFound from './pages/NotFound';
import ShortenerPage from './pages/ShortenerPage';
import RedirectPage from './pages/RedirectPage';
import { PostProvider } from './context/PostContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="post/:slug" element={<PostPage />} />
      <Route path="articles" element={<ArticlesPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="community" element={<CommunityPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="shor" element={<ShortenerPage />} />
      <Route path=":code" element={<RedirectPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a smoother transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="loader">
          <div className="loader-text">INITIALIZING SECURE CONNECTION</div>
          <div className="loader-bar"></div>
        </div>
      </div>
    );
  }

  return (
    <PostProvider>
      <RouterProvider router={router} />
    </PostProvider>
  );
}

export default App;