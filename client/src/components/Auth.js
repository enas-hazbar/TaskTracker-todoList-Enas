import { useState } from 'react'
import { useCookies } from 'react-cookie'

const Auth = () => {
// Using state to keep track of form inputs (like email and password) and cookies
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [isLogIn, setIsLogin] = useState(true) // Toggle between login and signup
  const [email, setEmail] = useState(null) 
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null) // Store error messages

  // Switch between login and signup views
  const viewLogin = (status) => {
    setError(null) // Clear errors when switching
    setIsLogin(status)
  }

  // Handle form submission (login or signup)
  const handleSubmit = async (e, endpoint) => {
    e.preventDefault()

    // Check if passwords match for signup
    if (!isLogIn && password !== confirmPassword) {
      setError('Make sure passwords match!')
      return
    }

    // Send request to server
    const response = await fetch(`${process.env.REACT_APP_SERVERURL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()

    // Handle response and errors
    if (data.detail) {
      setError(data.detail)
    } else {
      setCookie('Email', data.email)
      setCookie('AuthToken', data.token)
      window.location.reload() // Reload after successful login/signup
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogIn ? 'Please log in' : 'Please sign up!'}</h2>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogIn && (
            <input
              type="password"
              placeholder="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <input
            type="submit"
            className="create"
            onClick={(e) => handleSubmit(e, isLogIn ? 'login' : 'signup')}
          />
          {error && <p>{error}</p>}
        </form>
        <div className="auth-options">
          {/* Buttons to toggle between login/signup */}
          <button
            onClick={() => viewLogin(false)}
            style={{ backgroundColor: !isLogIn ? 'rgb(255, 255, 255)' : 'rgb(188, 188, 188)' }}
          >
            Sign Up
          </button>
          <button
            onClick={() => viewLogin(true)}
            style={{ backgroundColor: isLogIn ? 'rgb(255, 255, 255)' : 'rgb(188, 188, 188)' }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth
