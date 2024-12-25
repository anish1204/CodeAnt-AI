import React, { useState } from 'react'
import HeaderLogo from '../HeaderLogo';

const SignUpForm = () => {

  const [activeTab, setActiveTab] = useState('SAAS');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='d-col sign-in-sec' style={{width:'100%'}}>
      <HeaderLogo/>
      <div>
        <span className='primary_h f-32 '>
          Welcome to CodeAnt AI
        </span>
      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Tabs */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
      <button
  className='primary_h f-16'
  onClick={() => handleTabClick('SAAS')}
  style={{
    padding: '10px 20px',
    backgroundColor: activeTab === 'SAAS' ? '#007bff' : '#f0f0f0',
    color: activeTab === 'SAAS' ? 'white' : '#414651', // Updated color for inactive tab
    border: '1px solid #fff',
    borderRadius: '8px',
    height: '55px',
    cursor: 'pointer',
    width: '50%',
  }}
>
  SAAS
</button>
<button
  className='primary_h f-16'
  onClick={() => handleTabClick('Self Hosted')}
  style={{
    padding: '10px 20px',
    backgroundColor: activeTab === 'Self Hosted' ? '#007bff' : '#f0f0f0',
    color: activeTab === 'Self Hosted' ? 'white' : '#414651', // Updated color for inactive tab
    border: '1px solid #fff',
    borderRadius: '8px',
    height: '55px',
    cursor: 'pointer',
    width: '50%',
  }}
>
  Self Hosted
</button>
      </div>

      {/* Content */}
      <div style={{ padding: '20px', borderRadius: '5px' }}>
        {activeTab === 'SAAS' && 
        <div className='d-col option-card-container'>
            <div className='option_card'>
              <img src='./assets/Icon.svg'  />
              Sign in with Githhub
            </div>
            <div className='option_card'>
              <img src='./assets/Icon1.png'  />
              Sign in with BitBucket
            </div>
            <div className='option_card'>
              <img src='./assets/Icon2.png'  />
              Sign in with Azure Devops
            </div>
            <div className='option_card'>
              <img src='./assets/Icon3.png'  />
              Sign in with GithLab
            </div>

            

        </div>}
        {activeTab === 'Self Hosted' && <div>
          <div className='d-col option-card-container'>
            
            <div className='option_card'>
              <img src='./assets/Icon3.png'  />
              Self Host with Github
            </div>
            <div className='option_card'>
              <img src='./assets/Icon4.png'  />
              Sign in with SSO
            </div>

            

        </div>
          
          </div>}
      </div>
    </div>
    </div>
  )
}

export default SignUpForm