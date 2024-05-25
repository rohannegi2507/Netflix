import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

const Header = () => {
  const naviagte = useNavigate()
  const userInfo = useSelector((state) => state.user.userInfo)

  useEffect(() => {
  }, [userInfo])

  const handleSignOut = () => {
    try {
      signOut(auth).then(() => {
        naviagte("/login")
      })
    } catch (e) {
      console.error("Signed out", e)
    }

  }
  return (
    <header className='absolute z-1 w-full top-0 p-2 bg-gradient-to-b from-black flex justify-between'>
      <img
        className='w-44'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      ></img>
      {userInfo ?
        <div className='flex justify-center  '>
          <div className='flex justify-center items-center'>
            <img className="w-12 h-12 object-fit rounded" src={userInfo?.photoURL} />
          </div>
          <button className='text-white font-bold ml-2' onClick={handleSignOut}>Sign Out</button>
        </div> : <></>
      }
    </header>
  )
}

export default Header