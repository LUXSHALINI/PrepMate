import { Link } from 'react-router-dom';

const ActionCard = ({ title, description, buttonText, navigateTo }) => {
  return (
    <div className="bg-white p-6 rounded shadow hover:shadow-md transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={navigateTo}
        className="inline-block bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default ActionCard;
