import React, { useEffect, useState } from 'react'

function Github() {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/farhandazzler').then(response=>response.json()).then(data=>{
            console.log(data);
            setData(data);
        })

    },[])
  return (
      <div className='text-center m-4'>Github Followers:{data.followers}
      <img src={data.avatar_url} alt='Github Pic'/>
      </div>
  )
}

export default Github