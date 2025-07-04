const ActivityItem = ({ text, time }) => {
    return (
      <div className="bg-white p-3 rounded shadow-sm text-sm">
        <p>{text}</p>
        <p className="text-gray-500 text-xs">{time}</p>
      </div>
    );
  };
  
  export default ActivityItem;
  