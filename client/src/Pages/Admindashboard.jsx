import StatCard from '../components/StatCard';
import ActionCard from '../components/Actioncard';
import AdminSidebar from '../components/Adminsidebar';

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-teal-800">Welcome Admin!</h1>
          <p className="text-gray-600">banu@gmail.com</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Questions" value="856" subtitle="+5% from last week" />
          <StatCard title="Active Sessions" value="89" subtitle="Currently online" />
          <StatCard title="System Health" value="98%" subtitle="All systems operational" />
        </div>

        {/* Action Cards Section */}
        <div>
          <h2 className="text-xl font-semibold text-teal-700">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <ActionCard
              title="Add Questions"
              description="Add new questions for the question bank"
              buttonText="Go to Add Questions"
              navigateTo="/admin/add-question"
            />
            <ActionCard
              title="Manage Users"
              description="View and manage user accounts"
              buttonText="Go to User Management"
              navigateTo="/users"
            />
            <ActionCard
              title="View Analytics"
              description="Check system performance and usage stats"
              buttonText="Go to Analytics"
              navigateTo="/admin/analytics"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
