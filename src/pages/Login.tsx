import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { validateData } from '../utils/validate';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, USER } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isNewUser, setIsNewUser] = useState(true)
  const [errorString, setErrorString] = useState('')
  const fullName = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const state = useSelector((state: { user: USER }) => state.user.userInfo)

  useEffect(() => {
    console.log("state -- store", state)
  }, [state])


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.current || !password.current) {
      return
    }
    try {

      if (validateData(email.current?.value, password.current?.value)) {
        let userData
        if (isNewUser) {
          userData = await createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
        } else {
          userData = await signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
        }

        dispatch(addUser(userData.user))
        navigate('/browser')
        console.log("user", userData.user)
      }
    } catch (e) {
      if(typeof e === 'string') {
        setErrorString(e.toString())
      }
      
      console.error("error", e)
    }

  }

  return (
    <div className='bg-signin h-screen relative -z-1 black-rgba flex justify-center items-center '>
      <Header />

      <div className="absolute mx-auto rounded-md text-center text-white bg-black w-4/12 flex flex-col gap-2 p-12 bg-opacity-80" >
        <form onSubmit={handleSubmit} className="text-white flex flex-col gap-3"  >
          {<h1 className='text-2xl flex mb-2 p-2 font-bold'>{isNewUser ? ' Create' : ' Sign in'}</h1>}
          {isNewUser ? <input ref={fullName} type='text' className="bg-black px-4 py-5 w-full bg-opacity-50" placeholder='Full Name' ></input> : null}
          <input ref={email} type='text' className="bg-black px-4 py-5 w-full" placeholder='Email or mobile number' ></input>
          <input ref={password} type='text' className="bg-black  px-4 py-5 w-full bg-" placeholder='Password'></input>

          <button
            type="submit" className='bg-red-600 text-white py-4 font-bold mt-4 border-1 rounded hover:bg-red-700' >
            {isNewUser ? ' Create' : ' Sign in'}
          </button>
          {errorString.length !== 0 ? <div>{errorString}</div> : <></>}
        </form>

        <p className='inline flex p-2'>
          <span>{isNewUser ? 'New to Netflix ? ' : 'Aleady a user ? '}</span>
          <button className="inline font-bold ml-1" onClick={() => { setIsNewUser(!isNewUser) }}>{isNewUser ? ' Sign up' : ' Sign in'}</button>
        </p>


      </div>

    </div>
  )
}

export default Login
