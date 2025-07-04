const SubjectProgressCard = ({ subject, progress, icon }) => {
    return (
      <div className="bg-white p-4 rounded shadow">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{icon}</span>
          <h4 className="font-semibold">{subject}</h4>
        </div>
        <p className="text-sm text-gray-500 mb-1">Progress</p>
        <div className="w-full bg-gray-200 h-2 rounded">
          <div className="bg-teal-500 h-2 rounded" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    );
  };
  
  export default SubjectProgressCard;
  