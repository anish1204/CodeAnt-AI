import React from 'react'

const Item = ({ data }) => {
  console.log(data, 'dara')
  return (
    <div className='d-col item-sec'>
      <div className='d-flex top-sec'>
        <span className='inter f-20 fw-400'>
          {data.title}
        </span>
        <div className='repo-type inter'>
          {data.status}
        </div>
      </div>
      <div className='d-flex btm-sec justify-content-around'>
        <div className='d-flex align-items-center g-1'>
          <span>
            {data.stack}
            </span>
          <div className='blgcircle'>

          </div>
        </div>
        <div className='d-flex aling-items-center g-1'>
          <img src="../assets/dashboard/database.svg" height={20} width={20} />
        
          <span>{data.size}</span>
        </div>
        <div >
        <span>{data.activity}</span>
        </div>
      </div>

    </div>
  )
}

export default Item