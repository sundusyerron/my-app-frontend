import React from "react";
import { NavLink } from "react-router-dom";



function Header() {
    return (
        <div className="flex content-center justify-between items-center h-32 bg-gradient-to-r from-amber-300 to-orange-600 shadow-lg z-50 fixed top-0 left-0 right-0">
            <h3 className="subpixel-antialiased font-mono text-4xl font-bold text-orange-800 p-4 m-4 align-middle">MEME GENERATOR APP</h3>
            <div>

                <nav className="text-cyan-700">
                    <ul className="m-0 p-0 list-none overflow-hidden text-xl">
                        <NavLink to="/memes" exact className="inline h-4 rounded-lg m-2 p-2">Memes</NavLink>
                        <NavLink to="/add" exact className="inline h-4 rounded-lg m-2 p-2">Add Memes</NavLink>
                        <NavLink to="/update" exact className="inline h-4 rounded-lg m-2 p-2">Update Meme</NavLink>
                        <NavLink to="/signup" exact className="inline h-4 rounded-lg m-2 p-2">Signup or Login</NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;