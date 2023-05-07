import React from 'react'

import Carousel2 from '../components/carousel2';
import CarouselMobile, { CarouselItemMobile } from '../components/carouselmobile';
import MediumBlog from '../components/mediumblog'
import LatestPost from '../components/mediumlatest';
import TeamCarousel from '../components/teamcarousel';

import logo from '../assets/images/logo_godcast.png';
import { new_hombre_celular_movil, new_hombre_sala_movil, new_mujer_celular_movil, new_mujer_cocina_movil } from '../assets/images/people/assets_people'
//import video1 from '../assets/videos/godcastkids_video.mp4'
import { svg_apple_color, svg_spotify_color, svg_whatsapp_color, svg_youtube_color } from '../assets/icons/assets_icons'
import { svg_donate } from '../assets/icons/assets_icons'

import '../styles/home.css'


function Home() {
    function buttonScroll() {
        const section = document.getElementById("section_3")
        section.scrollIntoView({ behavior:'smooth',block:'start' })
    }

  return (
    <div className='home'>
        <div className='section_1' id='section_1'>
            <div className='section_container'>
                <div className='section_1_container_left'>
                    <img className='logohome' src={logo} alt='logo'></img>
                    <h1 className='header'>
                        Un ratito con Jesús
                    </h1>
                    <p className='description'>
                        Audios de 10 minutos grabados por sacerdotes mexicanos que te ayudarán a conectar con Jesús todos los días.
                    </p>
                    <div className='buttons_container'>
                        <a href='https://chat.whatsapp.com/Ki6hhWNsgH904Rx3RfWpGk'>
                        <button  className='learnmore' href='/'>
                            ¡Únete al grupo de whatsapp!
                        </button>
                        </a>
                        <button className='learnmore' href='/' onClick={buttonScroll}>
                            Ir a las meditaciones
                        </button>
                    </div>
                    <div className='medios_container'>
                        <a href='https://chat.whatsapp.com/Ki6hhWNsgH904Rx3RfWpGk'>
                            <button className='medios'><img className='svg_icons_home' src={svg_whatsapp_color} alt='whatsapp'></img><span>whatsapp</span></button>
                        </a>
                        <a href='https://spotify.link/rNPOK86w5xb'>
                            <button className='medios'><img className='svg_icons_home' src={svg_spotify_color} alt='spotify'></img><span>spotify</span></button>
                        </a>
                        <a href='https://www.youtube.com/@godcast-unratitoconjesus-mx/videos?sub_confirmation=1'>
                            <button className='medios'><img className='svg_icons_home' src={svg_youtube_color} alt='youtube'></img><span>youtube</span></button>
                        </a>
                        <a href='https://podcasts.apple.com/us/podcast/godcast-un-ratito-con-jes%C3%BAs/id1501785577'>
                            <button className='medios'><img className='svg_icons_home' src={svg_apple_color} alt='apple'></img><span>apple podcast</span></button>
                        </a>    
                    </div>
                </div>
                <div className='section_1_container_right'>
                    <div className='carousel_desktop'>
                        <Carousel2/>
                    </div>
                    
                    <div className='carousel_mobile'>
                        <CarouselMobile className="carousel_mobile_home">
                            <CarouselItemMobile>
                                <img className='carousel_images_mobile' src={new_mujer_cocina_movil} alt='audifonos' />
                            </CarouselItemMobile>
                            <CarouselItemMobile>
                                <img className='carousel_images_mobile' src={new_hombre_celular_movil} alt='cocina' />
                            </CarouselItemMobile>
                            <CarouselItemMobile>
                                <img className='carousel_images_mobile' src={new_mujer_celular_movil} alt='coche' />
                            </CarouselItemMobile>
                            <CarouselItemMobile>
                                <img className='carousel_images_mobile' src={new_hombre_sala_movil} alt='oratorio' />
                            </CarouselItemMobile>
                        </CarouselMobile>
                    </div> 
                </div>
            </div>
        </div>
        <div className='section_2' id='section_2'>
            <div className='section_container'>
                <div className='section_2_container_left'>
                    <h2 className='header2'>
                        ¿Quiénes somos?
                    </h2>
                    <p className='description2'> Somos un grupo de sacerdotes mexicanos a los que nos une el amor a Jesucristo y a la predicación del Evangelio.<br></br><br></br>Puedes encontrarnos en los siguientes medios: </p>
                </div>
                <div className='section_2_container_right'>
                    <div className='team_carousel_container'>
                        <TeamCarousel/>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='section_3' id='section_3'>
            <div className='section_container'>
                <div className='section_3_container_left'>
                    <div className='latestpost_container'>
                        <LatestPost/>
                    </div>
                </div>
                <div className='section_3_container_right'>
                    <div className='mediumblog_container'>
                        <MediumBlog/>
                    </div>
                </div>
            </div>
        </div>
        <div className='section_4' id='section_4'>
            <div className='section_container'>
                <div className='section_4_container_left'>
                    <h2 className='header2'>
                        Ayuda a los Sacerdotes
                    </h2>
                    <p className='description2'>
                        GodCast colabora con FORSA para la Formación de Sacerdotes. Con tu donativo los ayudas en sus estudios. ¡Muchas gracias!
                    </p>
                    
                </div>
                <div className='section_4_container_right'>
                    <div className='donation_container'>
                        <div className='icon_wrapper'><img className='svg_icons_paypal' src={svg_donate} alt='donate'></img></div>
                        <p className='amount_instructions'>haz click en el boton para ir a la página de donaciones</p>
                        <button className='godcastkids_button'>Hacer una donación</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Home