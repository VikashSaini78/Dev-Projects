
import "./comNav.css"
// function Nav() {
//     return ( 
//         <>
//         <div className="w-auto bg-white h-auto"> 
//         <div className="container">
//         <div className="row">
//         <div className="col-md-3">
//             <h1  className="m-2">logo</h1>
//         </div>
//         <div className="col-md-6 ">
//            <div className="flex">
//            <h1 className="m-2">HomePage</h1>
//             <h1 className="m-2">about</h1>
//             <h1 className="m-2">service</h1>
//             <h1 className="m-2">contact</h1>

//            </div>

           
//         </div>
//            <div className="col-md-3 ">
//             <h1 className="m-2">logo</h1>
//         </div>

//         <div className="col-md-3  ">
//            <div className="flex">
          

//            </div>

           
//         </div>

//         </div>

//         </div>

//         </div>
       
//         </>
//      );
// }

// export default Nav;


import React, { useState } from 'react';
// import './Navbar.css'; // Import your CSS file for styling

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Logo</div>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
          <li className="navbar-item"><a href="#" className="navbar-link">Home</a></li>
          <li className="navbar-item"><a href="#" className="navbar-link">About</a></li>
          <li className="navbar-item"><a href="#" className="navbar-link">Services</a></li>
          <li className="navbar-item"><a href="#" className="navbar-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
