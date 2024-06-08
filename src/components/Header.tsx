import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { NETFLIX_LOGO } from '../utils/constant'

const Header = () => {
  const navigate = useNavigate()
  const userInfo = useSelector((state:any) => state.user.userInfo)
  const dispatch = useDispatch()

  useEffect(() => {
  }, [userInfo])

  useEffect(() => {
     const unsubscribeCallback = onAuthStateChanged(auth, (user)=>{
       if(user){
         const {uid, email,displayName, photoURL} = user;

         dispatch(addUser({uid,email,displayName,photoURL}))
         navigate('/browser')
       } else {
          dispatch(removeUser())
          navigate('/')
       }
     })

     return () => {
      unsubscribeCallback()
     }
  },[])

  const handleSignOut = () => {
    try {
      signOut(auth)
    } catch (e) {
      console.error("Signed out", e)
    }

  }
  return (
    <header className='absolute z-1 w-full top-0 p-2 bg-gradient-to-b from-black flex justify-between'>
      <img
        className='w-44'
        src={NETFLIX_LOGO}
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