// import React from 'react';

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Header */}
//       <header className="w-full bg-gradient-to-r from-indigo-600 to-orange-500 text-white py-6 shadow-lg relative">
//         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
//           <h1 className="text-3xl font-extrabold">acuLearn</h1>
//           <nav className="mt-4 md:mt-0">
//             <ul className="flex space-x-6 text-lg">
//               <li>
//                 <a href="#features" className="hover:text-gray-200 transition-colors">
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="#how-it-works" className="hover:text-gray-200 transition-colors">
//                   How It Works
//                 </a>
//               </li>
//               <li>
//                 <a href="#get-started" className="hover:text-gray-200 transition-colors">
//                   Get Started
//                 </a>
//               </li>
//               <li><div className="relative">
//             <img
//               src="https://via.placeholder.com/50" // Replace with your profile picture URL
//               alt="Profile"
//               className="w-12 h-12 rounded-full border-4 border-white shadow-lg"
//             />
//           </div></li>
//             </ul>
//           </nav>

//           {/* Profile Picture */}
//           <div className="absolute top-4 ">
           
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section
//         id="hero"
//         className="relative w-full h-screen flex items-center justify-center"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative text-center text-white px-4">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">Empower Your Learning Journey</h2>
//           <p className="text-lg md:text-xl mb-8">
//             AI-powered personalized study plans and interactive learning experiences that adapt to you.
//           </p>
//           <a
//             href="#get-started"
//             className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition"
//           >
//             Start Now
//           </a>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="flex-grow w-full py-12 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4">
//           {/* Features Section */}
//           <section id="features" className="mb-16">
//             <h2 className="text-3xl font-semibold text-center mb-8">Features</h2>
//             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//               <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow">
//                 <h3 className="text-xl font-bold text-indigo-600 mb-2">Personalized Recommendations</h3>
//                 <p className="text-gray-600">
//                   Get content tailored to your learning style and progress.
//                 </p>
//               </div>
//               <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow">
//                 <h3 className="text-xl font-bold text-indigo-600 mb-2">Smart Study Plans</h3>
//                 <p className="text-gray-600">
//                   AI-driven plans based on your curriculum and exam schedules.
//                 </p>
//               </div>
//               <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow">
//                 <h3 className="text-xl font-bold text-indigo-600 mb-2">Interactive Quizzes</h3>
//                 <p className="text-gray-600">
//                   Practice with engaging quizzes and receive instant feedback.
//                 </p>
//               </div>
//               <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow">
//                 <h3 className="text-xl font-bold text-indigo-600 mb-2">Real-Time Assistance</h3>
//                 <p className="text-gray-600">
//                   Access AI-powered chatbots to help with your doubts anytime.
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* How It Works Section */}
//           <section id="how-it-works" className="mb-16">
//             <h2 className="text-3xl font-semibold text-center mb-8">How It Works</h2>
//             <div className="max-w-3xl mx-auto space-y-6">
//               <div className="flex items-start space-x-4">
//                 <span className="text-orange-500 text-2xl font-bold">1.</span>
//                 <p>Create your profile and take a short assessment to identify your learning style and current level.</p>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <span className="text-orange-500 text-2xl font-bold">2.</span>
//                 <p>Receive personalized content recommendations and study materials aligned with your curriculum.</p>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <span className="text-orange-500 text-2xl font-bold">3.</span>
//                 <p>
//                   Engage with AI-generated summaries, interactive quizzes, and practice tests to reinforce your learning.
//                 </p>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <span className="text-orange-500 text-2xl font-bold">4.</span>
//                 <p>Monitor your progress and adjust your learning plan for continuous improvement.</p>
//               </div>
//             </div>
//           </section>

//           {/* Get Started Section */}
//           <section id="get-started" className="text-center">
//             <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
//             <p className="mb-8 text-gray-700">
//               Join now and unlock your personalized learning experience.
//             </p>
//             <a
//               href="#"
//               className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition"
//             >
//               Sign Up Today
//             </a>
//           </section>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="w-full bg-gray-700 text-white py-6">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <p className="mb-2">&copy; {new Date().getFullYear()} acuLearn. All rights reserved.</p>
//           <p className="text-sm">Empowering learners with the power of AI.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;




import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Lessons from './components/Lessons'
import Chatbot from './components/ChatBot'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path='/chatbot' element={<Chatbot/>}/>
      </Routes>
    </div>
  )
}

export default App
