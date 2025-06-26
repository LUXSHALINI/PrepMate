import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
  } from 'recharts';
  
  const data = [
    { month: 'Jan', score: 15 },
    { month: 'Feb', score: 20 },
    { month: 'Mar', score: 40 },
    { month: 'Apr', score: 60 },
    { month: 'May', score: 75 },
    { month: 'Jun', score: 90 },
  ];
  
  const PerformanceChart = () => {
    return (
      <div className="bg-[#2B8C82] text-white rounded-xl p-6 shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-1">Recent Performance Trend</h2>
        <p className="text-sm mb-4 text-white/80">
          Average scores over the last 6 assessments/months.
        </p>
  
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: 'white' }} />
            <YAxis tick={{ fill: 'white' }} domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="score" fill="#ffffff" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
  
        <div className="mt-3 text-sm text-white/70">
          <span className="inline-block w-3 h-3 bg-white mr-2 rounded"></span>
          Average Score
        </div>
  
        <p className="text-xs mt-2 text-white/60">
          Performance data is updated after each practice session or assessment.
        </p>
      </div>
    );
  };
  
  export default PerformanceChart;
  