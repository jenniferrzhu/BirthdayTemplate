import React from 'react'
import './styles/Timeline.css'; 
import replaceImg1 from '../imgs/flowers.jpg';
import replaceImg2 from '../imgs/tulips.jpg';


const Timeline = () => {
  return (
    <div> 
        <div className="container"> 
            <h1>~ our timeline ~</h1> 
            <div className="cards">
                <div className="card">
                    <a href="/page-template6"> 
                        <img src={replaceImg1} />
                        <h3>mm/dd/yyyy</h3>
                    </a>
                </div>
                <div className="card">
                    <a href="/page-template5"> 
                        <img src={replaceImg2} />
                        <h3>mm/dd/yyyy</h3>
                    </a>
                </div>
                <div className="card">
                    <a href="/page-template4"> 
                        <img src={replaceImg1} />
                        <h3>mm/dd/yyyy</h3>
                    </a>
                </div>
                <div className="card">
                    <a href="/page-template3"> 
                        <img src={replaceImg2} />
                        <h3>mm/dd/yyyy</h3>
                    </a>
                </div>
                <div className="card">
                    <a href="/page-template2"> 
                        <img src={replaceImg1} />
                        <h3>mm/dd/yyyy</h3>
                    </a>
                </div>
                <div className="card">
                    <a href="/page-template1"> 
                        <img src={replaceImg2} />
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