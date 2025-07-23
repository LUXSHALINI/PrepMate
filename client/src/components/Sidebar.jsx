import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `block px-4 py-2 rounded hover:bg-teal-700 transition ${
      isActive ? 'bg-teal-800 font-semibold' : ''
    }`;

  return (
    <aside className="w-64 bg-teal-600 text-white p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">PrepMate</h1>
      <nav className="space-y-2">
        <NavLink to="/dashboard" className={linkClasses}>
          📊 Dashboard
        </NavLink>
        <NavLink to="/mysubjects" className={linkClasses}>
          📚 My Subjects
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
