// src/pages/MySubjects.jsx
import { useNavigate } from 'react-router-dom';
import SubjectCard from '../components/SubjectCard';
import Sidebar from '../components/Sidebar';

const MySubjects = () => {
  const navigate = useNavigate();

  const subjects = [
    { name: 'Mathematics', icon: '🧮' },
    { name: 'Science', icon: '🔬' },
    { name: 'English', icon: '📝' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">My Subjects</h2>

        <div className="grid grid-cols-3 gap-6">
          {subjects.map((subj, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow">
              <SubjectCard subject={subj} />
              <div className="text-center mt-4">
                <button
                  onClick={() =>
                    subj.name === 'Mathematics'
                      ? navigate('/math-chapters')
                      : alert('🔒 Coming soon')
                  }
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                >
                  {subj.name === 'Mathematics'
                    ? '📘 Chapter-wise Questions'
                    : '🔒 Locked'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MySubjects;
