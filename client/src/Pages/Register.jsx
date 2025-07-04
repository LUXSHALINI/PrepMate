import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const { login } = useAuth(); // Fix: Call useAuth() with ()
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student', 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role
      });

      if (res.status === 201) {
        const userData = res.data; 
        login(userData); 

        if (formData.role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/trial-success');
        }
      }
    } catch (err) {
      console.error('Axios Error:', err);

      if (err.response?.data?.error) {
        alert(err.response.data.error);
      } else {
        alert('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center font-sans"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/soft-teal-pastel-gradient-background-ar-916-v-52-job-id-e0957bd00a6b42d5939228b8b8490882_941600-291986.jpg')",
      }}
    >
      <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-[#103156] mb-3 text-center tracking-wide">
          🎓 PrepMate Registration
        </h2>
        <p className="text-gray-600 text-center text-sm mb-6">
          Start your free 15-day journey to smarter studying!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B8C82]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B8C82]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B8C82]"
              required
              minLength={6}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B8C82]"
              required
              minLength={6}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B8C82]"
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2B8C82] text-white py-2 rounded-lg font-semibold text-lg shadow hover:bg-[#256c63] transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          By registering, you agree to our terms and privacy policy.
        </p>
      </div>
    </div>
  );
};

export default Register;
