import axios from 'axios'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'


export const postsLoader = async ({request , params})=>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data
}


const Posts = () => {

  const posts = useLoaderData()
  // console.log(posts)
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-white text-center text-2xl my-10'>
            Posts Page
      </h1>
     

      {
        posts.map((post,i)=>(
          <Link className='flex py-2 px-4 bg-slate-700 ' to={`${post.id}`}  key={i}>
              <span className="text-green-300 text-lg mr-2">{post.id} - </span>
              
               { post.title}
           </Link>
        ))
      }


      
    </div>
  )
}

export default Posts