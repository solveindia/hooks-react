import React from 'react'
import { useEffect } from 'react'

const Third = ({data}) => {

    useEffect(()=>{
        data.fun("I am Ankit dsf dfd")
    },[])

  return (
    <>
        <div className='third'>Third
            <h2> {data.data} </h2>
            <p> {data.data2} </p>
        </div>
    </>
  )
}

export default Third