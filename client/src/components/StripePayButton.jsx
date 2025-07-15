// import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios';

// const stripePromise = loadStripe('your_stripe_publishable_key_here'); // Replace with your real key

// const StripePayButton = ({ chapterId }) => {
//   const handlePayment = async () => {
//     try {
//       const stripe = await stripePromise;

//       const res = await axios.post('http://localhost:5000/api/payment/create-session', {
//         chapterId,
//       }, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('auth_token')}`, // if auth required
//         },
//       });

//       const sessionId = res.data.id;
//       await stripe.redirectToCheckout({ sessionId });
//     } catch (err) {
//       console.error('Payment error:', err);
//       alert('Failed to initiate payment');
//     }
//   };

//   return (
//     <button
//       onClick={handlePayment}
//       className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
//     >
//       💳 Unlock Chapter
//     </button>
//   );
// };

// export default StripePayButton;
