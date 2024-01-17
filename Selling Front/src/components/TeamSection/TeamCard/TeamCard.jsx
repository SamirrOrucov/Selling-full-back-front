import React from 'react'
import "./TeamCard.scss"
function TeamCard({image,name,role,desc}) {
  return (
    <div className='teamCard'>
        <img src={image} alt="" />
        <p className='name'>{name}</p>
        <p className='role'>{role}</p>
        <p className='desc'>{desc}</p>
        <div className="social">
            <div className="icn"><i class="fa-brands fa-facebook-f"></i></div>
            <div className="icn"><i class="fa-brands fa-facebook-f"></i></div>
            <div className="icn"><i class="fa-brands fa-facebook-f"></i></div>
            <div className="icn"><i class="fa-brands fa-facebook-f"></i></div>

        </div>
    </div>
  )
}

export default TeamCard