import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Logging in", credentials)
    navigate('/dashboard')
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-2xl shadow-black w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        {/* Form with onSubmit */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full mb-4 px-3 py-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full mb-6 px-3 py-2 border rounded"
          />
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Login
          </button>
        </form>

        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-green-500 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
