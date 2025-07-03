import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending login:', formData);
      const res = await axios.post('http://localhost:5000/api/auth/login', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = res.data;
      console.log(data);
      console.log('Login request body:', res.body);

      alert('Login successful!');
      if (data.user.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/dashboard');
      }
  
    } catch (err) {
      console.error('Login Error:', err);
      alert(err.response?.data?.error || err.message || 'Something went wrong');
    }
  };
  
  
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/soft-teal-pastel-gradient-background-ar-916-v-52-job-id-e0957bd00a6b42d5939228b8b8490882_941600-291986.jpg)' }}
    >
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-sm text-center">
        <div className="mb-4 text-3xl">🔐</div>
        <h2 className="text-xl font-semibold mb-2">Sign in with email</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Make a new doc to bring your words, data and team together. For 15 days free.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="text-right mt-1 text-sm text-teal-600 hover:underline cursor-pointer">
              Forgot password?
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
          >
            Get Started
          </button>
        </form>

        <div className="my-4 text-gray-500 text-sm">— Or sign in with —</div>

        <div className="flex justify-center gap-4">
          <button className="bg-white p-2 rounded-full shadow hover:scale-105 transition">
            <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" className="w-6 h-6" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:scale-105 transition">
            <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" className="w-6 h-6" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:scale-105 transition">
            <img src="https://img.icons8.com/ios-filled/50/000000/mac-os.png" alt="Apple" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
