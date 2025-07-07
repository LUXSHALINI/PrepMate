import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bio: "",
    dailyGoal: 0,
    breakTime: 0,
    preferredTime: "",
    difficulty: "",
  });
  const [loading, setLoading] = useState(true);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/editprofile/me");
        setFormData(res.data);
        console.log("Profile loaded:", res.data);
      } catch (err) {
        console.error("Failed to load profile", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("http://localhost:5000/api/editprofile/me", formData);
      setFormData(res.data);
      setSuccessMsg("Profile updated successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  if (loading) return <div className="p-6">Loading profile...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>

        {successMsg && (
          <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid gap-8">
          {/* Profile Picture Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
              <button
                type="button"
                className="text-white bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
              >
                Change Picture
              </button>
            </div>

            {/* Personal Information */}
            <div className="border p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="input"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="input col-span-2"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="input col-span-2"
                />
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Bio"
                  className="input col-span-2"
                />
              </div>
            </div>
          </div>

          {/* Study Preferences */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Study Preferences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="number"
                name="dailyGoal"
                value={formData.dailyGoal}
                onChange={handleChange}
                placeholder="Daily Study Goal"
                className="input"
              />
              <input
                type="number"
                name="breakTime"
                value={formData.breakTime}
                onChange={handleChange}
                placeholder="Break Time (minutes)"
                className="input"
              />
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="input"
              >
                <option>Morning (6AM - 12PM)</option>
                <option>Afternoon (12PM - 6PM)</option>
                <option>Evening (6PM - 12AM)</option>
                <option>Night (12AM - 6AM)</option>
              </select>
              <select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className="input"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EditProfile;
