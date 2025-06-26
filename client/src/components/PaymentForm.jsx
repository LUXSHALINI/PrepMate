import { useState } from 'react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    country: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Payment methods</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Contact info</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Shipping */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Shipping</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md shadow-sm"
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md shadow-sm"
              >
                <option value="">Select Country</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="India">India</option>
              </select>
            </div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full mt-4 border px-4 py-2 rounded-md shadow-sm"
            />
          </div>

          {/* Payment */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Payment</label>
            <div className="flex gap-3 mb-4">
              <button type="button" className="border px-4 py-2 rounded-md font-medium shadow-sm bg-blue-50 text-blue-600">Card</button>
              <button type="button" className="border px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100">Google Pay</button>
              <button type="button" className="border px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100">Bank</button>
            </div>

            <input
              type="text"
              name="cardNumber"
              placeholder="1234 1234 1234 1234"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md shadow-sm mb-4"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md shadow-sm"
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={formData.cvc}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md shadow-sm"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button type="button" className="text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
