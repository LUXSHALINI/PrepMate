import {
  FaTachometerAlt,
  FaUserCog,
  FaQuestion,
  FaPlus,
  FaChartBar,
  FaLifeRing,
  FaCog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/admin/dashboard", icon: <FaTachometerAlt /> },
  { name: "User Management", path: "/admin/user-management", icon: <FaUserCog /> },
  { name: "Question Bank", path: "/admin/questions", icon: <FaQuestion /> },
  { name: "Add Questions", path: "/admin/add-question", icon: <FaPlus /> },
  { name: "Analytics", path: "/admin/analytics", icon: <FaChartBar /> },
  { name: "Help & Support", path: "/admin/support", icon: <FaLifeRing /> },
  { name: "Settings", path: "/admin/settings", icon: <FaCog /> },
];

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
      isActive
        ? "bg-white text-teal-600 font-semibold shadow"
        : "hover:bg-teal-700"
    }`;

  return (
    <aside className="w-64 bg-teal-600 text-white min-h-screen px-4 py-6">
      <h1 className="text-2xl font-bold mb-8 tracking-wider">🛡 Admin Panel</h1>
      <nav className="space-y-2">
        {menuItems.map((item, idx) => (
          <NavLink key={idx} to={item.path} className={linkClasses}>
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
