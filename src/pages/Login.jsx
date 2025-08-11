import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-hot-toast'

const Login = () => {
  const [state, setstate] = useState('Sign up') // Sign up or Login page mode
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')
  const [name, setname] = useState('')
  const { settoken } = useContext(AppContext)

  const navigate = useNavigate()

  const onsubmithandler = (event) => {
    event.preventDefault()

    // No real authentication, just creating a "logged in" simulation
    settoken('true')
    localStorage.setItem('token', 'true') // Persist login
    toast.success(`${state === 'Sign up' ? 'Account created' : 'Login successful'}!`)
    navigate('/')
  }

  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={onsubmithandler}>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>
          {state === 'Sign up' ? "Create Account" : "Login"}
        </p>
        <p>Please {state === 'Sign up' ? "Sign Up" : "Login"} to Book Appointment</p>

        {/* Full Name field for sign-up */}
        {state === 'Sign up' && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className='border border-zinc-300 rounded w-full p-2 mt-1'
              type='text'
              onChange={(e) => setname(e.target.value)}
              value={name}
            />
          </div>
        )}

        {/* Email */}
        <div className="w-full">
          <p>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type='email'
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
        </div>

        {/* Password */}
        <div className="w-full">
          <p>Password</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type='password'
            onChange={(e) => setpass(e.target.value)}
            value={pass}
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='bg-primary text-white w-full py-2 rounded-md text-base'
        >
          {state === 'Sign up' ? "Create Account" : "Login"}
        </button>

        {/* Change mode */}
        {state === "Sign up" ? (
          <p>Already Have An Account?
            <span
              onClick={() => setstate('Login')}
              className='text-primary underline cursor-pointer'
            >
              Login
            </span>
          </p>
        ) : (
          <p>New Here?{" "}
            <span
              onClick={() => setstate('Sign up')}
              className='text-primary underline cursor-pointer'
            >
              Register
            </span>
          </p>
        )}
      </div>
    </form>
  )
}

export default Login
