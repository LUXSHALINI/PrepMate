export const Progress = ({ value, className }) => {
    return (
      <div className={`w-full bg-white/20 rounded h-2 overflow-hidden ${className}`}>
        <div className="bg-white h-full" style={{ width: `${value}%` }}></div>
      </div>
    );
  };
  