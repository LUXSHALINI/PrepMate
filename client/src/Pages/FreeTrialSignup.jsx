// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const FreeTrialSignup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     school: '',
//     phone: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('User registered for trial:', formData);

  
//     navigate('/trial-success');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#E6F6F5] font-sans px-4">
//       <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full">
//         <h2 className="text-3xl font-bold text-[#103156] mb-4 text-center">
//           🎓 Start Your Free Trial
//         </h2>
//         <p className="text-gray-600 text-center text-sm mb-6">
//           {/* Join PrepMate today and get 15 days of full access to personalized learning tools. */}
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block mb-1 font-semibold text-gray-700">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               required
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//           </div>
//           <div>
//             <label className="block mb-1 font-semibold text-gray-700">Age</label>
//             <input
//               type="number"
//               name="age"
//               value={formData.age}
//               onChange={handleChange}
//               placeholder="Enter your age"
//               required
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//           </div>
//           <div>
//             <label className="block mb-1 font-semibold text-gray-700">School</label>
//             <input
//               type="text"
//               name="school"
//               value={formData.school}
//               onChange={handleChange}
//               placeholder="Your school name"
//               required
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//           </div>
//           <div>
//             <label className="block mb-1 font-semibold text-gray-700">Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="07X-XXXXXXX"
//               required
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#2B8C82] text-white py-2 rounded-lg font-semibold text-lg hover:bg-[#237368] transition"
//           >
//             Sign Up For Free Trial
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FreeTrialSignup;
