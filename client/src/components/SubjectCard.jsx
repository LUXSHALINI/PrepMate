import { Pencil, Trash } from 'lucide-react';

const SubjectCard = ({ subject }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow w-full md:w-[48%] mb-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span>{subject.icon}</span> {subject.name}
          </h3>
          {/* <p className="text-sm text-gray-600">
            Total Hours: <strong>{subject.hours || 'N/A'}</strong>
          </p>
          <p className="text-sm text-gray-600">
            Last Studied: <strong>{subject.lastStudied || 'N/A'}</strong>
          </p> */}
        </div>
        <div className="flex gap-2">
          <button className="text-gray-500 hover:text-blue-600">
            <Pencil size={18} />
          </button>
          <button className="text-gray-500 hover:text-red-600">
            <Trash size={18} />
          </button>
        </div>
      </div>

      {/* <div className="mt-4">
        <p className="text-sm mb-1">Overall Progress</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-teal-500 h-2 rounded-full"
            style={{ width: `${subject.progress || 0}%` }}
          ></div>
        </div> */}

        <p className="text-sm mt-2 text-gray-700">
          Topics ({subject.completedTopics || 0}/{subject.totalTopics || 0})
        </p>

        <ul className="text-sm text-gray-600 mt-2 space-y-1">
          {(subject.topics || []).map((topic, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {topic.done ? '✅' : '⭕'} {topic.name}
            </li>
          ))}
        </ul>
      {/* </div> */}
    </div>
  );
};

export default SubjectCard;
