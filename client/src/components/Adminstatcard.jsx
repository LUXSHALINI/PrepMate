export default function StatCard({ title, value, subtitle }) {
    return (
      <div className="border rounded-lg p-5 text-center shadow-sm">
        <h4 className="text-gray-500">{title}</h4>
        <h2 className="text-2xl font-bold">{value}</h2>
        {subtitle && <p className="text-sm text-green-600">{subtitle}</p>}
      </div>
    );
  }
  