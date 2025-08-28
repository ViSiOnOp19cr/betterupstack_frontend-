import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import { LoadingSpinner } from './LoadingSpinner';
import { StatusBadge } from './StatusBadge';
import { ResponseTimeChart } from './ResponseTimeChart';

export const WebsiteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { logout, userProfile } = useAuth();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      loadWebsiteDetails();
    }
  }, [id]);

  const loadWebsiteDetails = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await api.getWebsiteStatus(id);
      setDetails(data);
    } catch (error) {
      console.error('Failed to load website details:', error);
      setError(error.message || 'Failed to load website details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
        <nav className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/dashboard" className="flex items-center">
                  <i className="fas fa-heartbeat text-indigo-400 text-xl mr-2" />
                  <h1 className="text-xl font-semibold">Upgaurd</h1>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                {userProfile && (
                  <div className="flex items-center space-x-2 text-sm text-slate-300">
                    <i className="fas fa-user-circle" />
                    <span>{userProfile.username}</span>
                    {userProfile.email && (
                      <>
                        <span>•</span>
                        <span className="text-slate-400">{userProfile.email}</span>
                      </>
                    )}
                  </div>
                )}
                <button onClick={logout} className="text-slate-300 hover:text-white">
                  <i className="fas fa-sign-out-alt" />
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
        <nav className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/dashboard" className="flex items-center">
                  <i className="fas fa-heartbeat text-indigo-400 text-xl mr-2" />
                  <h1 className="text-xl font-semibold">Upgaurd</h1>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                {userProfile && (
                  <div className="flex items-center space-x-2 text-sm text-slate-300">
                    <i className="fas fa-user-circle" />
                    <span>{userProfile.username}</span>
                    {userProfile.email && (
                      <>
                        <span>•</span>
                        <span className="text-slate-400">{userProfile.email}</span>
                      </>
                    )}
                  </div>
                )}
                <button onClick={logout} className="text-slate-300 hover:text-white">
                  <i className="fas fa-sign-out-alt" />
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <i className="fas fa-exclamation-triangle text-4xl text-amber-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Error Loading Website</h2>
            <p className="text-slate-400 mb-4">{error}</p>
            <Link 
              to="/dashboard"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/dashboard" className="flex items-center">
                <i className="fas fa-heartbeat text-indigo-400 text-xl mr-2" />
                <h1 className="text-xl font-semibold">Upgaurd</h1>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {userProfile && (
                <div className="flex items-center space-x-2 text-sm text-slate-300">
                  <i className="fas fa-user-circle" />
                  <span>{userProfile.username}</span>
                  {userProfile.email && (
                    <>
                      <span>•</span>
                      <span className="text-slate-400">{userProfile.email}</span>
                    </>
                  )}
                </div>
              )}
              <button onClick={logout} className="text-slate-300 hover:text-white">
                <i className="fas fa-sign-out-alt" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0 mb-6">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate(-1)}
              className="text-slate-400 hover:text-white"
            >
              <i className="fas fa-arrow-left mr-2" />
              Back
            </button>
            <h1 className="text-2xl font-bold">Website Details</h1>
          </div>
        </div>

        {details && (
          <div className="px-4 sm:px-0 space-y-6">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <i className="fas fa-globe text-indigo-400 text-xl" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-slate-400">Website URL</div>
                    <div className="text-sm text-white break-all">{details.url}</div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <i className="fas fa-heartbeat text-indigo-400 text-xl" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-slate-400">Current Status</div>
                    <div className="mt-1">
                      <StatusBadge status={details.latest_status} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <i className="fas fa-chart-line text-indigo-400 text-xl" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-slate-400">Uptime</div>
                    <div className="text-2xl font-bold text-white">{details.uptime_percentage}%</div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <i className="fas fa-clock text-indigo-400 text-xl" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-slate-400">Last Checked</div>
                    <div className="text-sm text-white">
                      {details.recent_ticks?.[0] 
                        ? new Date(details.recent_ticks[0].timestamp).toLocaleString()
                        : 'Never'
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Graph */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60">
              <div className="px-6 py-4 border-b border-white/10">
                <h3 className="text-lg font-medium">Response Times</h3>
                <p className="mt-1 text-sm text-slate-400">Detailed performance metrics over the last few checks.</p>
              </div>
              <div className="p-4">
                <ResponseTimeChart data={details.recent_ticks} />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                <a 
                  href={details.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  <i className="fas fa-external-link-alt mr-2" />
                  Visit Website
                </a>
                <button 
                  onClick={loadWebsiteDetails}
                  className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  <i className="fas fa-sync-alt mr-2" />
                  Refresh
                </button>
              </div>
            </div>

            {/* Recent Checks Table */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60">
              <div className="px-6 py-4 border-b border-white/10">
                <h3 className="text-lg font-medium">Recent Checks</h3>
                <p className="mt-1 text-sm text-slate-400">Latest monitoring results for this website</p>
              </div>
              
              <div className="overflow-x-auto">
                {details.recent_ticks && details.recent_ticks.length > 0 ? (
                  <table className="min-w-full divide-y divide-white/10">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                          Response Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                          Region
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                          Timestamp
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-transparent divide-y divide-white/10">
                      {details.recent_ticks.map((tick, index) => (
                        <tr key={index} className="hover:bg-white/5">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <StatusBadge status={tick.status} />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            <span className={`font-medium text-white`}>
                              {tick.total_response_time_ms}ms
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                            {tick.region || 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                            {new Date(tick.timestamp).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8">
                    <i className="fas fa-chart-line text-4xl text-slate-500 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No check data available</h3>
                    <p className="text-slate-400">Check data will appear here once monitoring begins</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};