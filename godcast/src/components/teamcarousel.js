import React, {useState} from 'react'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { JFC, FU, PB, GG, AC, FGC, RA, ED, JM, CM, ER, RV, HR } from '../assets/images/sacerdotes/assets_sacerdotes'

import '../styles/teamcarousel.css'

function TeamCarousel() {
    const [isActive, setIsActive] = useState(false);
    const [position, setPosition] = useState(0);

    const handleClick = () => {
        setIsActive(true)
        if (position - 25 > -100) {
            setPosition(position - 25)
        }
    };

    const handleClickLeft = () => {
        setIsActive(true)
        if (position + 25 <= 0) {
            setPosition(position + 25)
        }
    }

  return (
    <div className='team_carousel_main'>
        <div className='team_carousel_buttons'>
            <button className='team_carousel_button' onClick={handleClickLeft}>
                <ChevronLeftIcon/>
            </button>
            <button className='team_carousel_button' onClick={handleClick}>
                <ChevronRightIcon/>
            </button>
        </div>
    <div className='team_carousel' style={isActive ? {transform: `translateX(${position}%)`} : {transform: `translateX(0)`}}>
        <div className='person_card_container'> 
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={JFC}></img>
                <h2 className='person_card_h2'>Josemaría Fernández Cueto</h2>
                <p className='person_card_text'>
                    Soy de la Ciudad de México pero vivo en Guadalajara después de haber recibido la Ordenación Sacerdotal, hace diez años. He trabajado con jóvenes casi toda mi vida. Procuro ayudarles a buscar, encontrar y amar a Jesús con todo el corazón, como nos enseñó San Josemaría. Actualmente soy Capellán de Los Altos, una escuela para niñas donde creemos que las cosas ordinarias se pueden hacer extraordinariamente bien por amor a Dios. Disfruto de la compañía de mi f
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={FU}></img>
                <h2 className='person_card_h2'>Francisco Ugarte</h2>
                <p className='person_card_text'>
                    Vivo en la Ciudad de México, aunque soy de Guadalajara. Estudié la licenciatura y la maestría en la UNAM, y el doctorado también en filosofía en la Universidad de la Santa Cruz en Roma. Actualmente soy capellán del Ipade Business School y también colaboro en la formación de profesores de la Universidad Panamericana. Tuve la gran fortuna de convivir con San Josemaría, que me dejó una huella indeleble. Me gusta mucho el deporte, especialmente ahora la bicicleta de montaña.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={FGC}></img>
                <h2 className='person_card_h2'>Francisco García Casas</h2>
                <p className='person_card_text'>
                    Nací en la Ciudad de México. Soy Licenciado en Ciencias de la Comunicación y Doctor en Teología. Recibí la Ordenación Sacerdotal en Roma en 2006. Trabajo actualmente como Capellán en la Universidad Panamericana.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={GG}></img>
                <h2 className='person_card_h2'>Guillermo Gutiérrez</h2>
                <p className='person_card_text'>
                    Nací en la Cd. de México y soy sacerdote Diocesano de la Arquidiócesis de México. Actualmente soy Párroco de la Comunidad Purísima Concepción, en el Barrio La Fama y Director del Centro de Estudios de Familia Bioética y Sociedad de la Universidad Pontificia de México, donde también soy profesor.
                </p>
            </div>
        </div>
        <div className='person_card_container'> 
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={AC}></img>
                <h2 className='person_card_h2'>Alejandro Córdova</h2>
                <p className='person_card_text'>
                    Nací en Hermosillo, Sonora. Soy el cuarto de 5 hermanos. Primero estudié Ingeniería Industrial en la Universidad Panamericana. Después Teología Moral en la Universidad de Navarra. En 2012 recibí la Ordenación Sacerdotal de manos de Mons. Javier Echevarría. En mis años de sacerdote, he estado en labor con jóvenes, sobre todo en San Luis Potosí y Guadalajara
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={PB}></img>
                <h2 className='person_card_h2'>Pedro Benítez</h2>
                <p className='person_card_text'>
                    Nací en la Ciudad de México. Soy sacerdote de la arquidiócesis de Tlalnepantla. Actualmente vivo en España donde me dedico a la formación sacerdotal.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={RA}></img>
                <h2 className='person_card_h2'>Rafael Arce</h2>
                <p className='person_card_text'>
                    Nací en la Ciudad de México, en 1957.  Soy Licenciado en Derecho y Doctor en Teología.  Fui ordenado sacerdote en Roma,  en 1982.  Soy aficionado a la natación, a la música clásica y coral, al piano y a la literatura. Soy profesor de Teología en la Universidad Panamericana. Trabajo en la Parroquia de San Josemaría Escrivá, en Santa Fe, Ciudad de México.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={ED}></img>
                <h2 className='person_card_h2'>Eduardo Díaz</h2>
                <p className='person_card_text'>
                    Nací en Taxco Guerrero, soy Ingeniero Electrónico por el ITESO (Guadalajara) y sacerdote de la Prelatura del Opus Dei desde el año 2009. Actualmente trabajando en la Parroquia de San Josemaría de Santa Fe, Cdmx
                </p>
            </div>
        </div>
        <div className='person_card_container'> 
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={JM}></img>
                <h2 className='person_card_h2'>Josemaría Mayora</h2>
                <p className='person_card_text'>
                    Estudié Ingeniería Industrial en la Universidad Panamericana (Campus Guadalajara) y algunos años después hice el doctorado en Sagrada Teología en la Pontificia Universidad de la Santa Cruz (Roma, Italia). Actualmente soy profesor del Instituto de Humanidades de la Universidad Panamericana Campus México, en donde imparto la asignatura de Antropología Teológica II. Defendí la tesis doctoral titulada “Análisis moral del fenómeno de las dependencias (adicciones)”. Mis áreas de especialización son: noviazgo, matrimonio y familia. Además de la labor académica me dedico a la atención de capellanía de la Universidad Panamericana y en la Preparatoria Varonil de la misma Universidad. Mi deporte es el padel, y disfruto mucho pasar el tiempo con mis amigos.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={CM}></img>
                <h2 className='person_card_h2'>Cristian Mendoza</h2>
                <p className='person_card_text'>
                    Soy el segundo de tres hermanos. Nací en Zamora y crecí en Guadalajara, mis papás son buenos católicos y un gran ejemplo. Estudié finanzas en la UP y desde el 2003 vivo en Roma. Doy clases de moral social en la Pontificia Universidad de la Santa Cruz. Me ordenaron sacerdote el 14 de mayo del 2011.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={ER}></img>
                <h2 className='person_card_h2'>Ervin Ramos</h2>
                <p className='person_card_text'>
                    ¡Hola!, soy un sacerdote tabasqueño. En el 2013 llegué a Roma para completar mi formación sacerdotal en el Seminario Sedes Sapientiae y en la Universidad de la Santa Cruz. Me encanta la música y disfruto mucho caminar en montaña. Conquistar una cima nunca es fácil pero aunque el camino sea duro cuando estás arriba el panorama es maravilloso. En la naturaleza admiro la belleza de la creación de Dios. Actualmente concluyo mis estudios en Roma, en estos años he trabajado siempre con jóvenes. Deseo de corazón que en GodCast podamos caminar juntos hacia la santidad personal a través de nuestro encuentro cotidiano con Cristo. Dios y la Reina del Cielo les bendigan.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={RV}></img>
                <h2 className='person_card_h2'>Roberto Vera</h2>
                <p className='person_card_text'>
                    Nací y crecí en la Ciudad de México, ciudad de la que soy un entusiasta sin remedio, aunque también estoy orgulloso de mis raíces oaxaqueñas. Estudié Lengua y Literaturas Hispánicas en la UNAM y luego pasé 14 años en Roma, trabajando en el ámbito de la comunicación institucional y estudiando en la Pontificia Universidad de la Santa Cruz, en la que obtuve el doctorado en Teología Bíblica. Fui ordenado sacerdote en 2020. Al regresar a México viví unos meses en Guadalajara y actualmente desarrollo mi tarea sacerdotal en San Luis Potosí. Me gusta mucho leer y escuchar música y me encanta lo relacionado con la edición y encuadernación de libros.
                </p>
            </div>
        </div>
        <div className='person_card_container'> 
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={HR}></img>
                <h2 className='person_card_h2'>Héctor Razo</h2>
                <p className='person_card_text'>
                    Recibí la ordenación sacerdotal el 22 de mayo de 2021. Actualmente compatibilizo mis estudios de Teología Moral en la Universidad de la Santa Cruz, en Roma, junto con otras actividades apostólicas, entre las que se encuentra la atención de una Capellanía Universitaria.
                </p>
            </div>
            <div className='fill_card'>
            </div>
            <div className='fill_card'>
            </div>
            <div className='fill_card'>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TeamCarousel