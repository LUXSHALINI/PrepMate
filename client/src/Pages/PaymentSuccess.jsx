import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirm = async () => {
      const token = localStorage.getItem('auth_token');
      const sessionId = params.get('session_id');
      const chapterId = params.get('chapterId');

      try {
        const res = await axios.get(
          `http://localhost:5000/api/payments/confirm-payment?session_id=${sessionId}&chapterId=${chapterId}`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        if (res.data.success) {
          alert('✅ Payment Successful');
          navigate('/math-chapters');
        } else {
          alert('❌ Payment failed');
        }
      } catch (err) {
        console.error(err);
        alert('Payment confirmation error');
      }
    };

    confirm();
  }, [params, navigate]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <p className="text-lg text-indigo-700">Verifying your payment...</p>
    </div>
  );
};

export default PaymentSuccess;
