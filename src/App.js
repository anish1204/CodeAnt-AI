import React from 'react'
import './index.css'
import SignUpForm from './components/SignUpForm/SignUpForm'
const App = () => {
  return (
    <div className='d-flex '>
      <div className='sign_lsec justify-content-end'>
        <div className='data-container'>
          <div className='info-box'>
            <div className='d-flex top-sec'>
              <img style={{ paddingLeft: '1rem' }} src='./assets/minilogo.svg' />
              <span className='primary_h' style={{ paddingLeft: '0.5rem' }}>
                AI to Detect & Autofix Bad Code
              </span>
            </div>
            <div className='d-flex justify-content-evenly bottom-sec'>
              <div className='d-col text-center'>
                <span className='primary_h'>
                  30+
                </span>
                <span className='primary_s'>
                  Language Support
                </span>
              </div>
              <div className='d-col text-center'>
                <span className='primary_h'>
                  10K+
                </span>
                <span className='primary_s'>
                  Developers
                </span>
              </div>
              <div className='d-col text-center'>
                <span className='primary_h'>
                  100K+
                </span>
                <span className='primary_s'>
                  Hours Saved
                </span>
              </div>

            </div>
          </div>
          <div className='intro-card'>
            <div className='d-flex justify-content-between'>
              <div className='p-box'>
                <img className='z_2' src='./assets/chart.png' width={29} height={29} />
              </div>
              <div className='d-col justify-content-center'>
                <span className='primary_h secondary'>&#x2191; 14%</span>
                <span className='primary_s' style={{paddingTop:'0.5rem'}}>This Week</span>
              </div>
            </div>
            <div className='d-col' style={{marginTop:'0.4rem'}}>
              <span className='primary_h f-16'>Issues Fixed</span>
              <span className='primary_h b_font'>500K+</span>
            </div>
          </div>
          <img className='left_image' src='./assets/Subtract.svg' height={319} width={284} />

        </div>
      </div>
      <div className='r_sec'>
        <div className='container'>
          <SignUpForm/>
            <span className='secondary_h f-16'>
              By signing up you agree to the  <strong>Privacy Policy</strong>
            </span>
        </div>
      </div>
    </div>
  )
}

export default App