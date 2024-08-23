import React, {  useState } from 'react'
import { useEffect } from 'react'

function Fetch() {
  let [holder, setHolder] = useState(null)

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setHolder(json))
            .catch(err => console.log("Error ooo"))
            
  },[])
  return (
    <div className=' h-[250vh] bg-slate-500 grid grid-cols-5 gap-4 '>
      {
        holder ? 
        holder.map((boy)=>( 
          <div className='  bg-slate-800 text-white p-3'>
            <div className=' h-[70%] '>
              <img src={boy.image} className=' h-[180px] w-[100%]' />
            </div>
            <h1 className=' h-[20%] bg-[red] text-[black] text-ellipsis overflow-hidden whitespace-nowrap'>title:{boy.title} </h1>
            <p className=' h-[10%] bg-lime-400'>price; {boy.price}</p>
          </div>

        )): <p>loading... wait</p>
      }

    </div>
  )
}

export default Fetch