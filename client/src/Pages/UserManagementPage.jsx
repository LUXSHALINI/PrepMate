import { useEffect, useState } from 'react';
import AdminSidebar from '../components/Adminsidebar';  // ஏற்கனவே உனக்கு உள்ள பாதை
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../../userService';

export default function UserListPage() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
  const [editingId, setEditingId] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      const data = res?.data;
      setUsers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Fetch failed:', err);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateUser(editingId, form);
      } else {
        await createUser(form);
      }
      setForm({ name: '', email: '', password: '', role: 'user' });
      setEditingId(null);
      fetchUsers();
    } catch (err) {
      alert(err.response?.data?.message || 'Something went wrong');
    }
  };

  const handleEdit = (user) => {
    setForm({ ...user, password: '' });
    setEditingId(user._id);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure to delete?')) {
      await deleteUser(id);
      fetchUsers();
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar here */}
      <AdminSidebar />

      {/* Main content */}
      <main className="flex-1 p-6 space-y-8">
        <h1 className="text-2xl font-bold text-teal-700">User Management</h1>

        {/* Users Table */}
        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="w-full text-left">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2 capitalize">{user.role}</td>
                    <td className="px-4 py-2 text-right space-x-2">
                      <button
                        onClick={() => handleEdit(user)}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
