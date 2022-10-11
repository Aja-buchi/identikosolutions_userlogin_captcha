import React from 'react'
import DashboardImg from '../../Assets/photo-welcome.jpeg'
import './dashboard.css'

function dashboard() {
  return (
    <div className='dashboard-img'>
      <img src={DashboardImg} alt="smiley" className='smiley'/>
    </div>
  );
}

export default dashboard