import { Pencil, Trash } from 'lucide-react';

const SubjectCard = ({ subject }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow w-full md:w-[48%] mb-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span>{subject.icon}</span> {subject.name}
          </h3>
        </div>
        <div className="flex gap-2">
        </div>
      </div>
        <ul className="text-sm text-gray-600 mt-2 space-y-1">
          {(subject.topics || []).map((topic, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {topic.done ? '✅' : '⭕'} {topic.name}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default SubjectCard;
