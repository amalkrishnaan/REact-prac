import React  from 'react';
import { Link } from 'react-router-dom'
  const Nav = ()=> {
    return (
        <div style={{width:"100%",height:"100px",backgroundColor:"red"}}>
            <span><Link to ={"/"}>Home</Link></span>
            <span><Link to ={"/about"}>HAbout</Link></span>
        </div>
    )
  }

  export default Nav