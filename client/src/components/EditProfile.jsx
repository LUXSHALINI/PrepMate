// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "./Sidebar";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// const EditProfile = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     bio: "",
//     dailyGoal: 0,
//     breakTime: 0,
//     preferredTime: "",
//     difficulty: "",
//   });

//   const [profilePic, setProfilePic] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/editprofile/me", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
//           },
//         });
//         setFormData(res.data);
//         if (res.data.profilePic) {
//           setPreviewUrl(res.data.profilePic);
//         }
//       } catch (err) {
//         console.error("Failed to load profile", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setProfilePic(file);
//     if (file) {
//       setPreviewUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       for (const key in formData) {
//         formDataToSend.append(key, formData[key]);
//       }
//       if (profilePic) {
//         formDataToSend.append("profilePic", profilePic);
//       }

//       const res = await axios.put(
//         "http://localhost:5000/api/editprofile/me",
//         formDataToSend,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
//           },
//         }
//       );

//       setFormData(res.data);
//       if (res.data.profilePic) {
//         setPreviewUrl(res.data.profilePic);
//       }
//       toast.success("Profile updated successfully!");
//     } catch (err) {
//       console.error("Update failed", err);
//       toast.error("Failed to update profile");
//     }
//   };

//   if (loading) return <div className="p-6">Loading profile...</div>;

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <main className="flex-1 p-6 md:p-10">
//         <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>

//         <form onSubmit={handleSubmit} className="grid gap-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="border p-4 rounded-lg flex flex-col items-center justify-center">
//               <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-4">
//                 {previewUrl ? (
//                   <img
//                     src={previewUrl}
//                     onError={(e) => (e.target.src = "/default-avatar.png")}
//                     alt="Preview"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
//                     No Image
//                   </div>
//                 )}
//               </div>
//               <label className="cursor-pointer text-white bg-gray-600 px-4 py-2 rounded hover:bg-gray-700">
//                 Change Picture
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleImageChange}
//                 />
//               </label>
//             </div>

//             <div className="border p-4 rounded-lg">
//               <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="First Name"
//                   className="input p-2 border rounded"
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Last Name"
//                   className="input p-2 border rounded"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   className="input col-span-2 p-2 border rounded"
//                 />
//                 <textarea
//                   name="bio"
//                   value={formData.bio}
//                   onChange={handleChange}
//                   placeholder="Bio"
//                   className="input col-span-2 p-2 border rounded"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="border p-4 rounded-lg">
//             <h3 className="text-lg font-semibold mb-4">Study Preferences</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="number"
//                 name="dailyGoal"
//                 value={formData.dailyGoal}
//                 onChange={handleChange}
//                 placeholder="Daily Study Goal"
//                 className="input p-2 border rounded"
//               />
//               <input
//                 type="number"
//                 name="breakTime"
//                 value={formData.breakTime}
//                 onChange={handleChange}
//                 placeholder="Break Time (minutes)"
//                 className="input p-2 border rounded"
//               />
//               <select
//                 name="preferredTime"
//                 value={formData.preferredTime}
//                 onChange={handleChange}
//                 className="input p-2 border rounded"
//               >
//                 <option value="">Select Preferred Time</option>
//                 <option>Morning (6AM - 12PM)</option>
//                 <option>Afternoon (12PM - 6PM)</option>
//                 <option>Evening (6PM - 12AM)</option>
//                 <option>Night (12AM - 6AM)</option>
//               </select>
//               <select
//                 name="difficulty"
//                 value={formData.difficulty}
//                 onChange={handleChange}
//                 className="input p-2 border rounded"
//               >
//                 <option value="">Select Difficulty</option>
//                 <option>Beginner</option>
//                 <option>Intermediate</option>
//                 <option>Advanced</option>
//               </select>
//             </div>
//           </div>

//           <div className="text-right">
//             <button
//               type="submit"
//               className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </main>
//     </div>
//   );
// };

// export default EditProfile;
