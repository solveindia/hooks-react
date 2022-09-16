import React from 'react'
import Second from './Second'

const First = ({data}) => {
  return (
    <div className='first'>First
        <Second data={data} />
    </div>
  )
}

export default First