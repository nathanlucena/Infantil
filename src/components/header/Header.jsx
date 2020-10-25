import React from 'react';
import './Header.scss';
import Logo from '../../images/Logo.svg';
import BackButton from  '../../images/BackButton.svg';
import Lupa from  '../../images/Lupa.svg';



export default function Header() {
  return (
        <div className="Header">         
          <nav>
                <ul className="Menu">
                     
                <a href="https://www.w3schools.com">
                    <img className="Logo" border="0"  src={Logo}/>
                </a>

                    <li>
                        <div className="DivInput">
                            <input className="Input" type="text" placeholder="Search.." />
                            <img className="IconInput" border="0" src={Lupa}/>
                        </div>
                    </li>

                    <li>
                        <a href="#" >Sobre nós</a>
                    </li>

                    <li>
                        <a href="#" >Nossa equipe</a>
                    </li>

                    <li>
                        <a href="#" >ABC infantil</a>
                    </li>

                    <li>
                        <div className="Mainbutton">
                             <img className="BackButton1" border="0" src={BackButton}/>
                             <button className="PinkButton" href="#">TRAGA SUA IDEIA</button>
                        </div> 
                    </li>
                </ul>         
            </nav>
            
            
         

        </div>

  );
}

