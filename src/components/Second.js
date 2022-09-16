import React from 'react'
import Third from './Third'

const Second = ({data}) => {
  return (
    <div className='second'>Second
        <Third data={data} />
    </div>
  )
}

export default Second