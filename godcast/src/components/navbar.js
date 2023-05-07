import React, { useState } from 'react';

import { svg_whatsapp, svg_spotify, svg_youtube, svg_apple, svg_hamburguer } from '../assets/icons/assets_icons'
import logo from '../assets/images/logo_godcast.png';

import '../styles/navbar.css'


function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const handleClickScroll = (e) => {
        const btnId = e.target.id
        const element = document.getElementById(btnId);
        let section
        if (element.id === 'btn_s1') {
            section = document.getElementById('section_1')
        }
        else if (element.id === 'btn_s2') {
            section = document.getElementById('section_2')
        }
        else if (element.id === 'btn_s3') {
            section = document.getElementById('section_3')
        }
        else if (element.id === 'btn_s4') {
            section = document.getElementById('section_4')
        }
        section.scrollIntoView({ behavior:'smooth',block:'start' })
    };

  return (
    <nav className='navbar'>
        <div className='navbar_container'>
            <div className='navbar_container_left'>
                <a href="/" className='logo_container'><img className='logo' src={logo} alt="logo"/></a>
            </div>
            <div className='navbar_container_right'>
                <div className={`elements_container ${showNavbar && 'active'}`}>
                    <ul className='elements_text'>
                        <li>
                            <a href="/" className='nav_item' id='btn_s1' onClick={handleClickScroll}>Inicio</a>
                        </li>
                        <li>
                            <a href="/" className='nav_item' id='btn_s2' onClick={handleClickScroll}>Quienes somos</a>
                        </li>
                        <li>
                            <a href="/" className='nav_item' id='btn_s3' onClick={handleClickScroll}>Meditaciones</a>
                        </li>
                        <li>
                            <a href="/" className='nav_item' id='btn_s4'onClick={handleClickScroll}>Ayudar</a>
                        </li>
                    </ul>
                    <ul className='elements_icons'>
                        <li>
                            <a href="https://chat.whatsapp.com/Ki6hhWNsgH904Rx3RfWpGk" className='nav_item'><img className='svg_icons' src={svg_whatsapp} alt='whatsapp'></img></a>
                        </li>
                        <li>
                            <a href="https://spotify.link/rNPOK86w5xb" className='nav_item'><img className='svg_icons' src={svg_spotify} alt='spotify'></img></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@godcast-unratitoconjesus-mx/videos?sub_confirmation=1" className='nav_item'><img className='svg_icons' src={svg_youtube} alt='youtube'></img></a>
                        </li>
                        <li>
                            <a href="https://podcasts.apple.com/us/podcast/godcast-un-ratito-con-jes%C3%BAs/id1501785577" className='nav_item'><img className='svg_icons' src={svg_apple} alt='apple'></img></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='hamburguer_menu' onClick={handleShowNavbar}>
                <img className='svg_icons' src={svg_hamburguer} alt='menu'></img>
            </div>
        </div> 
    </nav>
  )
}

export default Navbar