import React from 'react';
import './Body.css';
import Horse from '../../images/Horse.svg';
import BackButton from  '../../images/BackButton.svg';




export default function Body() {
  return (
      <div className="Body">
          <img className="Horse" src={Horse} />
          <div className="MainBox">
            <div className="MainText">
                <div className="Tittle">
                    <text>ABC INFANTIL</text>
                </div>
              <text className="Description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Donec eu sagittis erat, mollis ornare lectus. Aliquam fringilla luctus magna.</text>
            </div>
              <div className="Mainbutton">
                <img className="BackButton1" border="0" src={BackButton}/>
                <button className="PinkButton" href="#">TRAGA SUA IDEIA</button>
              </div> 
            </div>
      </div>
  )}