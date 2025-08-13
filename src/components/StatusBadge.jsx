export const StatusBadge = ({ status }) => {
  const normalized = (status || '').toString().toLowerCase();
  const config =
    normalized === 'up'
      ? { color: 'status-up', bg: 'bg-green-100', text: 'UP', icon: 'fa-check-circle' }
      : normalized === 'down'
      ? { color: 'status-down', bg: 'bg-red-100', text: 'DOWN', icon: 'fa-times-circle' }
      : { color: 'status-unknown', bg: 'bg-gray-100', text: 'UNKNOWN', icon: 'fa-question-circle' };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.color}`}>
      <i className={`fas ${config.icon} mr-1`} />
      {config.text}
    </span>
  );
};


