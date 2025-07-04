import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import StudentRegister from './Pages/StudentRegister';
import TrialConfirmation from './Pages/TrialConfirmation'; 
import FreeTrialSignup from './Pages/FreeTrialSignup';
import Register from './Pages/Register';
import MySubjects from './Pages/MySubjects';
import EditProfile from "./components/EditProfile";
import Progress from "./Pages/Progress";
import AdminDashboard from './Pages/Admindashboard';
import UserManagementPage from './Pages/UserManagementPage';
// import AddQuestion from './Pages/AddQuestionModel';
import UserQuestionPage from './Pages/UserQuestionPage';
import AdminQuestionModal from './Pages/AddQuestionModal';
import AdminQuestionPage from './Pages/AdminQuestionPage';



function App() {
  return (
    <Router>
      <Header /> 
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/studentregister" element={<StudentRegister />} />
        <Route path="/signup-trial" element={<FreeTrialSignup />} />
        <Route path="/trial-success" element={<TrialConfirmation />} />

        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mysubjects" element={<MySubjects />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/editprofile" element={<EditProfile />} />

        <Route path="/admin/questions" element={<AdminQuestionPage />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/users" element={<UserManagementPage />} />
        <Route path="/admin/add-question" element={<AdminQuestionModal />} />

        <Route path="/questions" element={<UserQuestionPage />} />
       
        
        
        <Route path="*" element={<div className="p-6 text-center text-gray-500">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
