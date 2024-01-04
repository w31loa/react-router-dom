import { FC } from 'react'
import { Link } from 'react-router-dom'

const Header:FC = () => {
  return (
    <div className='bg-slate-900 py-4 px-4 text-white flex justify-center gap-20'>
        <Link to={'/'}>Home</Link>
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/add'}>Add</Link>
    </div>
  )
}

export default Header