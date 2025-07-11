import { useEffect, useState } from "react";
import axios from "axios";
import ProgressCard from "../components/ProgressCard";
import WeeklyActivity from "../components/WeeklyActivity";
import { FaCalculator, FaFlask, FaBookOpen } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const Progress = () => {
  const [subjects, setSubjects] = useState([]);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const userId = "64ab12c3e6e9e2d5fc99be11"; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subjRes = await axios.get(`/subjects/${userId}`);
        const actRes = await axios.get(`/activities/${userId}`);

        const subjData = Array.isArray(subjRes.data) ? subjRes.data : [];
        const actData = Array.isArray(actRes.data) ? actRes.data : [];

        setSubjects(subjData);
        setActivity(actData);
      } catch (err) {
        setError("Failed to load data. Please check your backend.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">Subject-wise Performance</h2>
          {subjects.map((subj, i) => (
            <ProgressCard
              key={i}
              icon={
                subj.name === "Mathematics"
                  ? <FaCalculator />
                  : subj.name === "Science"
                  ? <FaFlask />
                  : <FaBookOpen />
              }
              subject={subj.name}
              time={`${subj.studyTime}h`}
              topics={`${subj.topicsCovered}/${subj.totalTopics}`}
              percent={Math.round((subj.topicsCovered / subj.totalTopics) * 100)}
              last={new Date(subj.lastStudied).toLocaleString()}
              color="bg-teal-600"
            />
          ))}
        </div>

        <WeeklyActivity activity={activity} />
      </main>
    </div>
  );
};

export default Progress;
