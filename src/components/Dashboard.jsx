import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import { LoadingSpinner } from './LoadingSpinner';
import { StatusBadge } from './StatusBadge';
import { AddWebsiteModal } from './AddWebsiteModal';
import { WebsiteDetailsModal } from './WebsiteDetailsModal';


export const Dashboard = () => {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    void loadWebsites();
  }, []);

  const loadWebsites = async () => {
    try {
      const data = await api.getWebsites();
      setWebsites(data.websites || []);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to load websites:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddWebsite = () => {
    void loadWebsites();
    setShowAddModal(false);
  };

  const handleViewDetails = (website) => {
    setSelectedWebsite(website);
    setShowDetailsModal(true);
  };

  const getOverallStatus = () => {
    if (websites.length === 0) return 'unknown';
    const allUp = websites.every((w) => w.latest_status === 'Up');
    const anyDown = websites.some((w) => w.latest_status === 'Down');
    return anyDown ? 'down' : allUp ? 'up' : 'unknown';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <i className="fas fa-heartbeat text-indigo-400 text-xl mr-2" />
              <h1 className="text-xl font-semibold">Upgaurd</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={() => setShowAddModal(true)} className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                <i className="fas fa-plus mr-2" />
                Add Website
              </button>
              <button onClick={logout} className="text-slate-300 hover:text-white">
                <i className="fas fa-sign-out-alt" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <i
                    className={`fas fa-circle text-2xl ${getOverallStatus() === 'up' ? 'text-emerald-400' : getOverallStatus() === 'down' ? 'text-rose-400' : 'text-slate-400'}`}
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-slate-400 truncate">Overall Status</dt>
                    <dd className="text-lg font-medium">
                      {getOverallStatus() === 'up' && 'All Systems Operational'}
                      {getOverallStatus() === 'down' && 'Some Systems Down'}
                      {getOverallStatus() === 'unknown' && 'Status Unknown'}
                    </dd>
                  </dl>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-400">Monitoring</div>
                  <div className="text-2xl font-bold">{websites.length}</div>
                  <div className="text-sm text-slate-400">websites</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-0">
          <div className="overflow-hidden sm:rounded-md rounded-xl border border-white/10 bg-slate-900/60">
            <div className="px-4 py-5 sm:px-6 border-b border-white/10">
              <h3 className="text-lg leading-6 font-medium">Your Websites</h3>
              <p className="mt-1 max-w-2xl text-sm text-slate-400">Monitor the uptime and performance of your websites</p>
            </div>

            {loading ? (
              <div className="flex justify-center py-8">
                <LoadingSpinner />
              </div>
            ) : websites.length === 0 ? (
              <div className="text-center py-8">
                <i className="fas fa-globe text-4xl text-slate-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">No websites yet</h3>
                <p className="text-slate-400 mb-4">Get started by adding your first website to monitor</p>
                <button onClick={() => setShowAddModal(true)} className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Add Your First Website
                </button>
              </div>
            ) : (
              <ul className="divide-y divide-white/10">
                {websites.map((website) => (
                  <li key={website.id} className="px-4 py-4 hover:bg-white/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <StatusBadge status={website.latest_status} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium">{website.url}</div>
                          <div className="text-sm text-slate-400">
                            Added {new Date(website.time_added).toLocaleDateString()}
                            {website.last_checked && <> • Last checked {new Date(website.last_checked).toLocaleString()}</>}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button onClick={() => handleViewDetails(website)} className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                          View Details
                        </button>
                        <a href={website.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                          <i className="fas fa-external-link-alt" />
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>

      <AddWebsiteModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} onAdd={handleAddWebsite} />
      <WebsiteDetailsModal website={selectedWebsite} isOpen={showDetailsModal} onClose={() => setShowDetailsModal(false)} />
    </div>
  );
};


