import React from 'react'
import './styles/Timeline.css'; 
import replaceImg from '../imgs/flowers.jpg';


const Timeline = () => {
  return (
    <div> 
        <div className="container"> 
            <h1>~ our timeline ~</h1> 
            <div className="cards">
                <div className="card">
                    <a> 
                        <img src={replaceImg} />
                        <h3>mm/dd/yyyy</h3>
                    </a>
                </div>
                <div className="card">
                    <a> 
                        <img src={replaceImg} />
                        <h3>mm/dd/yyyy</h3>
                    </a>
                </div>
                <div className="card">
                    <a> 
                        <img src={replaceImg} />
                        <h3>mm/dd/yyyy</h3>
                    </a>
                </div>
                <div className="card">
                    <a> 
                        <img src={replaceImg} />
                        <h3>mm/dd/yyyy</h3>
                    </a>
                </div>
                <div className="card">
                    <a> 
                        <img src={replaceImg} />
                        <h3>mm/dd/yyyy</h3>
                    </a>
                </div>
                <div className="card">
                    <a> 
                        <img src={replaceImg} />
                        <h3>mm/dd/yyyy</h3>
                    </a>
                </div>
            </div>
            <a className="arrow" href="/question">
                click me! there's more!
            </a>
        </div>
    </div>
  )
}

export default Timeline