import axios from 'axios';

const StripePayButton = ({ chapterId }) => {
  const handlePayment = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      const res = await axios.post(
        'http://localhost:5000/api/payments/create-checkout-session',
        { chapterId },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      const sessionId = res.data.id;
      window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
    } catch (err) {
      alert('Payment failed');
      console.error(err);
    }
  };

  return (
    <button onClick={handlePayment} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
      💳 Pay to Unlock Exam
    </button>
  );
};

export default StripePayButton;
