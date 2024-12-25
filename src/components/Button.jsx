import React from 'react'

const Button = ({data,btntitle,imgSrc}) => {
  return (
    <button
  className={`${data === 1 ? 'btn-body-active' : ''} d-flex btn-body inter`}
>
  <img
     style={{ fill: data === 1 ? 'white' : 'black' }}
    src={imgSrc}
    alt="Icon"
  />
  <span>{btntitle}</span>
</button>
  )
}

export default Button