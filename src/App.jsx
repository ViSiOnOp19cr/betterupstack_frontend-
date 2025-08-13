import './index.css';
import { useAuth } from './context/AuthContext';
import { Dashboard } from './components/Dashboard';
import { LoginForm } from './components/LoginForm';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner" />
      </div>
    );
  }

  return user ? <Dashboard /> : <LoginForm />;
}

export default App
