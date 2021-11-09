import React from 'react'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar" >
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                    className="sidebarImg"
                    src="https://images.pexels.com/photos/9697401/pexels-photo-9697401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                    alt="" 
                />
                <p className="sidebarPara" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nemo a tempora dolores provident
                    delectus aut porro. Incidunt corporis tenetur voluptas nam.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList" >
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-linkedin"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
