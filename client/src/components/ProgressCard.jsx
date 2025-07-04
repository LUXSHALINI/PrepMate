const ProgressCard = ({ icon, subject, time, topics, percent, last, color }) => {
    return (
      <div className="flex flex-col mb-4">
        <div className="flex items-center gap-2 text-lg font-medium">
          {icon}
          <span>{subject}</span>
          <span className="ml-auto font-semibold">{percent}%</span>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded">
          <div className={`h-3 rounded ${color}`} style={{ width: `${percent}%` }} />
        </div>
        <div className="text-sm text-gray-600 mt-1">
          Study Time: {time} • Topics: {topics} • Last: {last}
        </div>
      </div>
    );
  };
  
  export default ProgressCard;
  