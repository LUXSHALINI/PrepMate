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
import AdminDashboard from './Pages/Admindashboard';
import UserManagementPage from './Pages/UserManagementPage';
import UserQuestionPage from './Pages/UserQuestionPage';
import AdminQuestionPage from './Pages/AdminQuestionPage';
import MathsChapters from './Pages/Mathschapter';
import PaymentSuccess from './Pages/PaymentSuccess';
import ProgressPage from "./Pages/ProgressPage";
import UploadQuestions from './Pages/uploadquestion';
import AllChaptersAdminPage from './Pages/AllChaptersAdminPage';
import ScienceChapters from './Pages/scienceChapter';
// import ScienceProgress from './Pages/scienceprogress';

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
        {/* <Route path="/admin/questions" element={<AdminQuestionPage />} /> */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/user-management" element={<UserManagementPage />} />
        {/* <Route path="/admin/add-question" element={<AdminQuestionModal />} /> */}

        <Route path="/questions" element={<UserQuestionPage />} />
       
        <Route path="/math-chapters" element={<MathsChapters />} />
        <Route path="/science-chapters" element={<ScienceChapters />} />

        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/admin/add-question" element={<UploadQuestions />} />
        <Route path="/admin/subjects" element={<AdminQuestionPage />} />
        <Route path="/admin/chapters" element={<AllChaptersAdminPage />} />

      </Routes>
    </Router>
  );
}

export default App;
