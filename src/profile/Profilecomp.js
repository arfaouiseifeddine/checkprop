import React from 'react'
import Childprof from './Childprof';
import img from './imageInSrc.jpg';


function Profilecomp  () {
    const HandlName = (name) => alert (`Hi! This is my checkpoint props ${name}`);
    return (
        <div>
           <Childprof fullname = "Arfaou SeifEdiine"   bio = "homme"   profession="ingenieur"  HandlName={HandlName}>
            
            <div>
            <img src={img} alt=""/>
            </div>
            </Childprof> 
        </div>
    )
}
export default Profilecomp;