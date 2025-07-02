import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/Header';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import StudentRegister from './Pages/StudentRegister';
import PaymentForm from './components/PaymentForm';
import Practice from './Pages/Practice';
import TrialConfirmation from './Pages/TrialConfirmation'; 
import FreeTrialSignup from './Pages/FreeTrialSignup';
import StudentList from './Pages/StudentList';
import Register from './Pages/Register';







function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/studentregister" element={<StudentRegister/>} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/trial-success" element={<TrialConfirmation />} />
        <Route path="/signup-trial" element={<FreeTrialSignup />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/admin/students" element={<StudentList />} />
        <Route path="/register" element={<Register/>} />

  
      </Routes>
  
    </Router>
  );
}

export default App;













