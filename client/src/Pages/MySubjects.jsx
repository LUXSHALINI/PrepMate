import SubjectCard from '../components/SubjectCard';
import Sidebar from '../components/Sidebar';

const MySubjects = () => {
  const subjects = [
    {
      name: 'Mathematics',
      icon: '🧮',
      hours: '45h',
      lastStudied: '2 hours ago',
      progress: 78,
      completedTopics: 3,
      totalTopics: 4,
      topics: [
        { name: 'Algebra', done: true },
        { name: 'Geometry', done: true },
        { name: 'Calculus', done: true },
        { name: 'Statistics', done: false },
      ],
    },
    {
      name: 'Science',
      icon: '🔬',
      hours: '32h',
      lastStudied: '1 day ago',
      progress: 65,
      completedTopics: 2,
      totalTopics: 3,
      topics: [
        { name: 'Physics', done: true },
        { name: 'Chemistry', done: true },
        { name: 'Biology', done: false },
      ],
    },
    {
      name: 'English',
      icon: '📝',
      hours: '28h',
      lastStudied: '3 hours ago',
      progress: 89,
      completedTopics: 4,
      totalTopics: 4,
      topics: [
        { name: 'Grammar', done: true },
        { name: 'Literature', done: true },
        { name: 'Writing', done: true },
        { name: 'Reading', done: true },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Subjects</h2>
          <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">➕ Add Subject</button>
        </div>

        <div className="flex flex-wrap justify-between gap-4">
          {subjects.map((subj, idx) => (
            <SubjectCard key={idx} subject={subj} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MySubjects;
