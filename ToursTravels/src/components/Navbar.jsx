import { useState } from "react";
// import { useTranslation } from "react-i18next";

function Navbar() {
  const [lang , setLang ] = useState("EN");    
  return (
    <div>
        <header className='navbar'>
            <div className="container">
                <div className="brand">
                    Jadoo
                </div>
                <ul className="nav-links">
                    <li>Destinations</li>
                    <li>Hotels</li>
                    <li>Flights</li>
                    <li>Booking</li>
                    <li>Login</li>
                </ul>
                <button className='btn-primary'>Sign up</button>
                <div className="right-side">
                    <select className='lang-select'
                     value={lang} 
                     onChange={(e)=> setLang(e.target.value)}>
                        <option value="EN">EN</option>
                        <option value="HI">HI</option>
                        <option value="GU">GU</option>
                        <option value="MR">MR</option>
                    </select>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar;
