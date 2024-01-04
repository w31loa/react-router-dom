import { FC } from "react"
import img from '../assets/404error.png'
import { Link, useRouteError } from "react-router-dom"

const ErrorPage:FC = () => {
  // const error = useRouteError()
  return (
    <div className="min-h-screen bg-slate-900 font-roboto text-white flex justify-center items-center flex-col gap-10">
        <img src={img} alt="" className="w-1/2" />
        <Link to={'/'} className='bg-sky-500 rounded-md px-6 py-2 hover:bg-sky-500'>Back</Link>
    </div>
  )
}

export default ErrorPage