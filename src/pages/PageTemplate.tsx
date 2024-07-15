import React from 'react'
import './styles/Album.css'; 
import pic from '../imgs/flowers.jpg';

const PageTemplate = () => {
  return (
    <div className='page'>
        <h1>Title</h1>
        <h3>~subtitle~</h3> 
        <div className="cards">
            <div className="card">
                <img src={pic} />
                <h3>caption</h3> 
            </div>
            <div className="card">
                <img src={pic} />
                <h3>caption</h3> 
            </div>
            <div className="card">
                <img src={pic} />
                <h3>caption</h3> 
            </div>
        </div>
        <p>Insert Message</p> 
        <a className="back" href="/timeline">
            return
        </a>
    </div>
  )
}

export default PageTemplate