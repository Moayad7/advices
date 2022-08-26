import React, {useState, useEffect} from 'react'
import axios from 'axios'


function DataFetch() {
  const [users, setUsers] = useState(``)

  useEffect(()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then(res => {
      console.log(res)
      setUsers(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },``)
  return (
    <div>
      <h1 className='text-2xl md:text-4xl lg:text-5xl p-5 text-red-50'>{users && users.slip.advice}</h1>
    </div>
  )
}

export default DataFetch