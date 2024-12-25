import React from 'react'

const HeaderLogo = () => {
  return (
    <div>
        <div className='d-flex justify-content-center'>
        <img alt="image" style={{ paddingLeft: '1rem' }} src='./assets/minilogo.svg' />
        <span className='primary_h satoshi f-30 mob-header-view' style={{ paddingLeft: '0.5rem' }}>
          CodeAnt AI
        </span>
      </div>
    </div>
  )
}

export default HeaderLogo