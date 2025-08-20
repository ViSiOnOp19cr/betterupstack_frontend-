import './index.css';
import { useAuth } from './context/AuthContext';
import { Dashboard } from './components/Dashboard';
import { LoginForm } from './components/LoginForm';
import { Landing } from './components/Landing';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-black">
        <div className="loading-spinner" />
      </div>
    );
  }

  const RequireAuth = ({ children }) => {
    if (!user) return <Navigate to="/login" replace />;
    return children;
  };

  const RedirectIfAuthed = ({ children }) => {
    if (user) return <Navigate to="/dashboard" replace />;
    return children;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RedirectIfAuthed>
            <Landing />
          </RedirectIfAuthed>
        }
      />
      <Route
        path="/login"
        element={
          <RedirectIfAuthed>
            <LoginForm />
          </RedirectIfAuthed>
        }
      />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to={user ? '/dashboard' : '/'} replace />} />
    </Routes>
  );
}

export default App
