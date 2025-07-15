// const WeeklyActivity = ({ activity }) => {
//     return (
//       <div className="bg-white p-4 rounded shadow mt-4">
//         <h2 className="text-lg font-semibold mb-2">This Week's Activity</h2>
//         {activity.map((d, i) => (
//           <div key={i} className="flex items-center justify-between py-1 text-gray-700">
//             <span>{d.day}</span>
//             <span>{d.studyHours}h studied</span>
//             <div className="flex gap-1">
//               {[...Array(4)].map((_, i2) => (
//                 <span
//                   key={i2}
//                   className={`w-2 h-2 rounded-full ${
//                     i2 < d.studyHours ? "bg-teal-500" : "bg-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default WeeklyActivity;
  