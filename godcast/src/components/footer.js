import React from 'react'
import { svg_whatsapp, svg_spotify, svg_youtube, svg_apple } from '../assets/icons/assets_icons'
import '../styles/footer.css'


function Footer() {
    const handleClickScroll = (e) => {
        const btnId = e.target.id
        const element = document.getElementById(btnId);
        let section
        if (element.id === 'btn_s11') {
            section = document.getElementById('section_1')
        }
        else if (element.id === 'btn_s22') {
            section = document.getElementById('section_2')
        }
        else if (element.id === 'btn_s33') {
            section = document.getElementById('section_3')
        }
        else if (element.id === 'btn_s44') {
            section = document.getElementById('section_4')
        }
        section.scrollIntoView({ behavior:'smooth',block:'start' })
    };

  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='footer_container_left'>
                <div className='links'>
                    <a id='btn_s11' onClick={handleClickScroll} href="/">Inicio</a>
                    <a id='btn_s22' onClick={handleClickScroll} href="/">Quienes somos</a>
                    <a id='btn_s33' onClick={handleClickScroll} href="/">Meditaciones</a>
                    <a id='btn_s44' onClick={handleClickScroll} href="/">Ayudar</a>
                </div>
                <div className='text'>
                    GODCAST © 2023 / 10 minutos con Jesús
                </div>
            </div>
            <div className='footer_container_right'>
                <a className='icons' href="https://chat.whatsapp.com/Ki6hhWNsgH904Rx3RfWpGk"> <img className='svg_icons' src={svg_whatsapp} alt='whatsapp'></img> </a>
                <a className='icons' href="https://spotify.link/rNPOK86w5xb"> <img className='svg_icons' src={svg_spotify} alt='spotify'></img> </a>
                <a className='icons' href="https://www.youtube.com/@godcast-unratitoconjesus-mx/videos?sub_confirmation=1"> <img className='svg_icons' src={svg_youtube} alt='youtube'></img> </a>
                <a className='icons' href="https://podcasts.apple.com/us/podcast/godcast-un-ratito-con-jes%C3%BAs/id1501785577"> <img className='svg_icons' src={svg_apple} alt='apple'></img> </a>
            </div>
        </div>
    </div>
  )
}

export default Footer