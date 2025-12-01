import { 
  HashRouter,
  Routes,
  Route,
  createRoutesFromElements,
  createHashRouter,
  RouterProvider 
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';
import CommunityPage from './pages/CommunityPage';
import SearchPage from './pages/SearchPage';
import ArticlesPage from './pages/ArticlesPage';
import NotFound from './pages/NotFound';
import { PostProvider } from './context/PostContext';
import StreamsPage from './pages/StreamsPage';
import BreachesPage from "./pages/BreachesPage";
import PublicIntelligencePage from './pages/PublicIntelligencePage';

// Changed from createBrowserRouter to createHashRouter
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="post/:slug" element={<PostPage />} />
      <Route path="articles" element={<ArticlesPage />} />
      <Route path="streams" element={<StreamsPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="community" element={<CommunityPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="breaches" element={<BreachesPage />} />
      <Route path="public-intelligence" element={<PublicIntelligencePage />} />
    </Route>
  )
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
