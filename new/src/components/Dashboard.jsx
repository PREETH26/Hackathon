import React from 'react'
import { Link } from 'react-router-dom'
import PieChartComponent from './PieChart'

const Dashboard = () => {
  // Dummy data for feedbacks and progress
  const feedbacks = [
    "Great progress in Mathematics!",
    "Needs improvement in Science.",
    "Excellent grasp on History."
  ]

  // Dummy chart data for subjects progress
  const progressData = {
    labels: ['Mathematics', 'Science', 'Machine Learning'],
    datasets: [
      {
        data: [40, 25, 35],
        backgroundColor: ['#4FD1C5', '#F6AD55', '#90CDF4'],
      },
    ],
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gray-200">
      {/* Dashboard Title */}
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Feedback Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Feedback</h2>
        <ul className="list-disc ml-5">
          {feedbacks.map((fb, index) => (
            <li key={index} className="mb-1">{fb}</li>
          ))}
        </ul>
      </div>

      {/* Progress Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mb-6 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-2">Progress</h2>
        <div className="w-64">
          <PieChartComponent chartData={progressData} />
        </div>
      </div>

      {/* Start Learning Button */}
      <Link to="/lessons" className="w-48">
        <div className="w-full p-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 text-center cursor-pointer">
          <span className="font-medium text-lg">Start Learning</span>
        </div>
      </Link>
      <br/>
      <Link to="/chatbot" className="w-48">
        <div className="w-full p-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 text-center cursor-pointer">
          <span className="font-medium text-lg">Ask Doubt</span>
        </div>
      </Link>
    </div>
  )
}

export default Dashboard
