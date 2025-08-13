import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { LoadingSpinner } from './LoadingSpinner';
import { StatusBadge } from './StatusBadge';

export const WebsiteDetailsModal = ({ website, isOpen, onClose }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && website) {
      void loadWebsiteDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, website?.id]);

  const loadWebsiteDetails = async () => {
    setLoading(true);
    try {
      const data = await api.getWebsiteStatus(website.id);
      setDetails(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to load website details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-10 mx-auto p-5 border w-4/5 max-w-4xl shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Website Details</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <i className="fas fa-times" />
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <LoadingSpinner />
          </div>
        ) : details ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Current Status</h4>
                <StatusBadge status={details.latest_status} />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Uptime</h4>
                <p className="text-2xl font-bold text-green-600">{details.uptime_percentage}%</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">URL</h4>
                <a href={details.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 break-all">
                  {details.url}
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-4">Recent Checks</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Response Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {details.recent_ticks?.map((tick, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={tick.status} /></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tick.response_time_ms}ms</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tick.region}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(tick.timestamp).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">Failed to load website details</div>
        )}
      </div>
    </div>
  );
};


