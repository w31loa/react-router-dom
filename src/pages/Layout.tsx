import { FC } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Layout:FC = () => {
  return (
    <div className='min-h-screen bg-slate-900 font-serif text-white pb-20'>
        <Header/>
        <div className="container mx-auto">
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout