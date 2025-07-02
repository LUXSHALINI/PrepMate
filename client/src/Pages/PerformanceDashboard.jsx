import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PerformanceDashboard = () => {
  const [students, setStudents] = useState([]);
  const [practiceStats, setPracticeStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
 
        const studentsRes = await axios.get('/api/performance/students-progress');
        
        const statsRes = await axios.get('/api/performance/practice-stats');

        setStudents(studentsRes.data);
        setPracticeStats(statsRes.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderProgressLabel = (level) => {
    switch(level) {
      case 'weak':
        return <span style={{ color: 'red', fontWeight: 'bold' }}>Weak</span>;
      case 'medium':
        return <span style={{ color: 'orange', fontWeight: 'bold' }}>Medium</span>;
      case 'strong':
        return <span style={{ color: 'green', fontWeight: 'bold' }}>Strong</span>;
      default:
        return <span>Unknown</span>;
    }
  };

  if (loading) return <div>Loading performance data...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={{ padding: '1rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1rem' }}>📊 Performance Monitoring</h1>

     
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '0.5rem' }}>Student Progress</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f3f3f3' }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Progress Level</th>
              <th style={thStyle}>Average Score</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 && (
              <tr><td colSpan="4" style={{ textAlign: 'center', padding: '1rem' }}>No student data found</td></tr>
            )}
            {students.map(student => (
              <tr key={student.id} style={{ textAlign: 'center' }}>
                <td style={tdStyle}>{student.name}</td>
                <td style={tdStyle}>{student.email}</td>
                <td style={tdStyle}>{renderProgressLabel(student.progressLevel)}</td>
                <td style={tdStyle}>{student.averageScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

     
      <section>
        <h2 style={{ marginBottom: '0.5rem' }}>Practice Stats by Subject</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f3f3f3' }}>
              <th style={thStyle}>Subject</th>
              <th style={thStyle}>Average Score</th>
              <th style={thStyle}>Attempts</th>
            </tr>
          </thead>
          <tbody>
            {practiceStats.length === 0 && (
              <tr><td colSpan="3" style={{ textAlign: 'center', padding: '1rem' }}>No practice stats found</td></tr>
            )}
            {practiceStats.map(stat => (
              <tr key={stat.subject} style={{ textAlign: 'center' }}>
                <td style={tdStyle}>{stat.subject}</td>
                <td style={tdStyle}>{stat.averageScore}</td>
                <td style={tdStyle}>{stat.attempts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

const thStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'center',
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

export default PerformanceDashboard;
