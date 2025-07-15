import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirm = async () => {
      const session_id = params.get('session_id');
      const chapterId = params.get('chapterId');

      try {
        const res = await axios.get(
          `http://localhost:5000/api/payment/confirm?session_id=${session_id}&chapterId=${chapterId}`
        );

        if (res.data.success) {
          const updatedAttempts = JSON.parse(localStorage.getItem('mathAttempts') || '{}');
          updatedAttempts[chapterId] = 0; // reset attempt count
          localStorage.setItem('mathAttempts', JSON.stringify(updatedAttempts));

          alert('Payment successful! Exam unlocked.');
        } else {
          alert('Payment not confirmed.');
        }
      } catch (err) {
        console.error('Confirm error:', err);
        alert('Something went wrong.');
      }

      navigate('/math-chapters');
    };

    confirm();
  }, [params, navigate]);

  return (
    <div className="flex justify-center items-center h-screen text-xl font-semibold text-green-700">
       Confirming payment, please wait...
    </div>
  );
};

export default PaymentSuccess;
