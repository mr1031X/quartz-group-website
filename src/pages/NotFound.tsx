import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[var(--deep-navy)] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50"></div>
      <div className="absolute inset-0 bg-mesh"></div>
      
      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <span className="text-9xl font-bold text-gradient" style={{ fontFamily: 'Inter Tight, sans-serif' }}>404</span>
        </div>
        <h1 className="text-h2 text-white mb-4">
          Page not found
        </h1>
        <p className="text-[var(--slate-400)] mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="btn-primary"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="btn-secondary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
