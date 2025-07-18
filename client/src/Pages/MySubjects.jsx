// import { useNavigate } from 'react-router-dom';
// import SubjectCard from '../components/SubjectCard';
// import Sidebar from '../components/Sidebar';

// const MySubjects = () => {
//   const navigate = useNavigate();

//   const subjects = [
//     { name: 'Mathematics', icon: '🧮' },
//     { name: 'Science', icon: '🔬' },
//     { name: 'English', icon: '📝' },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <main className="flex-1 p-6">
//         <h2 className="text-2xl font-bold mb-4">My Subjects</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {subjects.map((subj, idx) => (
//             <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
//               <SubjectCard subject={subj} />

//               <div className="text-center mt-6 space-y-3">
//                 {/* Chapter-wise Questions Button */}
//                 <button
//                   onClick={() =>
//                     subj.name === 'Mathematics'
//                       ? navigate('/math-chapters')
//                       : alert('🔒 Coming soon')
//                   }
//                   className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-200"
//                 >
//                   {subj.name === 'Mathematics'
//                     ? '📘 Chapter-wise Questions'
//                     : '🔒 Locked'}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MySubjects;

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

  const handleNavigation = (subject) => {
    if (subject === 'Mathematics') {
      navigate('/math-chapters');
    } else if (subject === 'Science') {
      navigate('/science-chapters');
    } else {
      alert('🔒 Coming soon');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">My Subjects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subj, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <SubjectCard subject={subj} />

              <div className="text-center mt-6 space-y-3">
                <button
                  onClick={() => handleNavigation(subj.name)}
                  className={`w-full py-2 rounded transition duration-200 ${
                    subj.name === 'Mathematics' || subj.name === 'Science'
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-400 text-white cursor-not-allowed'
                  }`}
                >
                  {subj.name === 'Mathematics' || subj.name === 'Science'
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

