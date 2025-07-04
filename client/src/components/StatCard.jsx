const StatCard = ({ icon, label, value }) => {
    return (
      <div className="bg-white p-4 rounded shadow text-center">
        <div className="text-3xl mb-2">{icon}</div>
        <p className="text-xl font-bold">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    );
  };
  
  export default StatCard;
  