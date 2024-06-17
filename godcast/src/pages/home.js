import React from 'react'

import Carousel2 from '../components/carousel2';
import CarouselMobile2 from '../components/carouselmobile2';
import MediumBlog from '../components/mediumblog'
import LatestPost from '../components/mediumlatest';
import TeamCarousel from '../components/teamcarousel';

import logo from '../assets/images/logo_godcast.png';
import logo_gk from '../assets/images/logo_godcast_kids.png';
//import video1 from '../assets/videos/godcastkids_video.mp4'
import { svg_apple_color, svg_spotify_color, svg_whatsapp_color, svg_youtube_color, svg_gk, svg_instagram_color } from '../assets/icons/assets_icons'
import { svg_donate } from '../assets/icons/assets_icons'

import '../styles/home.css'
import { gkimg1 } from '../assets/images/people/assets_people';



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
                        Audios diarios de 10 minutos que ayudan a meditar, hablar con Dios, hacer oración. En cada episodio, un sacerdote  intenta llevarte a conectar con Jesús a partir del evangelio de la misa del día o de alguna de las lecturas o de una memoria del calendario litúrgico. Puedes recibir el audio diario por Whatsapp o escucharlo en plataformas online.
                    </p>
                    <div className='buttons_container'>
                        <a href='https://chat.whatsapp.com/Ki6hhWNsgH904Rx3RfWpGk'>
                        <button  className='learnmore' href='/'>
                            ¡Únete al grupo de whatsapp!
                        </button>
                        </a>
                        <button className='learnmore' href='/' onClick={buttonScroll}>
                            Meditaciones escritas
                        </button>
                    </div>
                    <div className='medios_container'>
                        <a href='https://chat.whatsapp.com/Ki6hhWNsgH904Rx3RfWpGk'>
                            <button className='medios'><img className='svg_icons_home' src={svg_whatsapp_color} alt='whatsapp'></img><span>Whatsapp</span></button>
                        </a>
                        <a href='https://spotify.link/rNPOK86w5xb'>
                            <button className='medios'><img className='svg_icons_home' src={svg_spotify_color} alt='spotify'></img><span>Spotify</span></button>
                        </a>
                        <a href='https://www.youtube.com/@godcast-unratitoconjesus-mx/videos?sub_confirmation=1'>
                            <button className='medios'><img className='svg_icons_home' src={svg_youtube_color} alt='youtube'></img><span>Youtube</span></button>
                        </a>
                        <a href='https://podcasts.apple.com/us/podcast/godcast-un-ratito-con-jes%C3%BAs/id1501785577'>
                            <button className='medios'><img className='svg_icons_home' src={svg_apple_color} alt='apple'></img><span>Apple podcast</span></button>
                        </a>
                        <a href='https://www.instagram.com/godcastmx'>
                            <button className='medios'><img className='svg_icons_home' src={svg_instagram_color} alt='instagram'></img><span>Instagram</span></button>
                        </a>  
                    </div>
                </div>
                <div className='section_1_container_right'>
                    <div className='carousel_desktop'>
                        <Carousel2/>
                    </div>
                    
                    <div className='carousel_mobile'>
                        <CarouselMobile2/>
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
                    <p className='description2'> Somos un grupo de sacerdotes a los que nos une el amor a Jesucristo y la predicación del Evangelio.</p>
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
        <div className='section_5' id='section_5'>
            <div className='section_container'>
                <div className='section_5_container_left'>
                    <img className='logogk' src={logo_gk} alt='logo'></img>
                    <p className='description'>
                        Godcast Kids es un podcast para niños y niñas que, a través de meditaciones de 5 minutos, intenta ayudar a que platiquen con Jesús y crezcan en amistad con él. Cada episodio busca fortalecer la fe de los pequeños y tratar algún tema de su interés. Publicamos dos episodios nuevos cada semana, los martes y los jueves.
                        <br/><br/>Escucha Godcast Kids en:
                    </p>
                    <div className='medios_container'>
                        <a href='https://open.spotify.com/show/4IE7X2HayMsBVIPBW561SC?si=zZK3WSeKTFmoNZMSbaZnYw'>
                            <button className='medios'><img className='svg_icons_home' src={svg_spotify_color} alt='spotify'></img><span>Spotify</span></button>
                        </a>
                        <a href='https://www.youtube.com/playlist?list=PLxkebbLtXDqBaeWkdZbW_YF38xFYaytF8'>
                            <button className='medios'><img className='svg_icons_home' src={svg_youtube_color} alt='youtube'></img><span>Youtube</span></button>
                        </a>
                        <a href='https://www.instagram.com/godcastkids'>
                            <button className='medios'><img className='svg_icons_home' src={svg_instagram_color} alt='instagram'></img><span>Instagram</span></button>
                        </a>
                    </div>
                </div>
                <div className='section_5_container_right'>
                    <img className='gkimg' src={gkimg1} alt='niños rezando'></img>
                </div>
            </div>
        </div>
        <div className='section_4' id='section_4'>
            <div className='section_container'>
                <div className='section_4_container_left'>
                    <h2 className='header2'>
                        Ayuda a los sacerdotes
                    </h2>
                    <p className='description2'>
                        ¿Te gustaría apoyar a los sacerdotes que hacen Godcast? Puedes contribuir al mantenimiento del proyecto haciendo una donación a través de la Asociación FORSA que desde 2009 promueve la formación de sacerdotes mexicanos.
                    </p>
                    
                </div>
                <div className='section_4_container_right'>
                    <div className='donation_container'>
                        <div className='icon_wrapper'><img className='svg_icons_paypal' src={svg_donate} alt='donate'></img></div>
                        <p className='amount_instructions'>Haz clic en el botón para ir a la página de donaciones</p>
                        <a href='https://buy.stripe.com/00g4jRfPfcEDbfy9AA'><button className='godcastkids_button' >Hacer una donación</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Home
