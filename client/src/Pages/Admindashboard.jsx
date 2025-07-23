import StatCard from '../components/StatCard';
import ActionCard from '../components/Actioncard';
import AdminSidebar from '../components/Adminsidebar';

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen">
    
      <AdminSidebar />
      <div className="flex-1 bg-gray-50 p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-teal-800">Welcome Admin!</h1>
          <p className="text-gray-600">banu@gmail.com</p>
        </div>
        </div>
      </div>
  );
}
