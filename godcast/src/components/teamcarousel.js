import React, {useState} from 'react'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { JFC, FU, PB, GG, AC, FGC, RA, ED, JM, CM, ER, RV, HR, CA, CMK, JAC, JPL, OE, TL } from '../assets/images/sacerdotes/assets_sacerdotes'

import '../styles/teamcarousel.css'

function TeamCarousel() {
    const [isActive, setIsActive] = useState(false);
    const [position, setPosition] = useState(0);

    const handleClick = () => {
        setIsActive(true)
        if (position - 20 > -100) {
            setPosition(position - 20)
        }
    };

    const handleClickLeft = () => {
        setIsActive(true)
        if (position + 20 <= 0) {
            setPosition(position + 20)
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
                <img className='person_card_image' alt='personimg' src={AC}></img>
                <h2 className='person_card_h2'>Pbro. Alejandro Córdova</h2>
                <p className='person_card_text'>
                    Nací en Hermosillo, Sonora. Soy el cuarto de 5 hermanos. Primero estudié Ingeniería Industrial en la Universidad Panamericana. Después Teología Moral en la Universidad de Navarra. En 2012 recibí la Ordenación Sacerdotal de manos de Mons. Javier Echevarría. En mis años de sacerdote, he estado en labor con jóvenes, sobre todo en San Luis Potosí y Guadalajara
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={CA}></img>
                <h2 className='person_card_h2'>Pbro. Carlos Ernesto Aguilar</h2>
                <p className='person_card_text'>
                    Soy el menor de nueve hermanos, originario de Dolores Hidalgo, Guanajuato. Mi formación al sacerdocio la realicé en el Seminario Diocesano de la Inmaculada Concepción de Celaya y en el Seminario Internacional Bidasoa, en España, cursando la Teología en la Universidad de Navarra. Recibí la ordenación presbiteral el 23 de junio de 2017 en Celaya, Guanajuato. Ya ordenado sacerdote, se me pidió realizar los estudios de Licenciatura en Teología Moral en la Pontificia Universidad de la Santa Cruz, en Roma. Actualmente desempeño mi ministerio pastoral como Director Espiritual en el Seminario Menor de mi Diócesis; ayudando a adolescentes a que busquen, encuentren y amen al Señor; orientándoles en su proceso de maduración personal y acompañándoles en su discernimiento vocacional en un ambiente de confianza, amistad y libertad. Disfruto mucho de pasar tiempo con los demás, viéndoles y haciéndoles pasar un rato agradable, sea desde poder rezar juntos, compartir los alimentos, hacer deporte, ver una película, conversar, etc., buscando sembrar paz y alegría en ellos.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={CMK}></img>
                <h2 className='person_card_h2'>Pbro. Claudio Minakata U.</h2>
                <p className='person_card_text'>
                    Soy de Guadalajara, bueno, ahora soy de Naucalpan, Edomex. Y es increíble. Estudié en el colegio Altamira y luego Administración y Finanzas en la UP. Entre 2009 y 2015 viví en Roma y Pamplona. En la Universidad de Navarra hice un doctorado en Derecho Canónico. Trabajé de 2015 a 2019 en Guadalajara y Ciudad de México. Soy sacerdote desde el 5.IX.2020. Ahora soy capellán de dos magníficos Colegios: Cedros Norte y Paseo. Me gusta leer y la música; correr, nadar, la bicicleta, el montañismo y el basketball. Soy del Atlas desde antes de nacer: junto con la fe, la mejor herencia de mis papás (ser fiel). CONSEJO: No tengas miedo. El miedo impide amar al Señor y ser libre. Ayuda recordar lo que dice San Josemaría: lo que se necesita para conseguir la felicidad, no es una vida cómoda, sino un corazón enamorado.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={CM}></img>
                <h2 className='person_card_h2'>Pbro. Cristian Mendoza</h2>
                <p className='person_card_text'>
                    Soy el segundo de tres hermanos. Nací en Zamora y crecí en Guadalajara, mis papás son buenos católicos y un gran ejemplo. Estudié finanzas en la UP y desde el 2003 vivo en Roma. Doy clases de moral social en la Pontificia Universidad de la Santa Cruz. Me ordenaron sacerdote el 14 de mayo del 2011.
                </p>
            </div>
        </div>
        <div className='person_card_container'> 
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={ED}></img>
                <h2 className='person_card_h2'>Pbro. Eduardo Díaz</h2>
                <p className='person_card_text'>
                    Nací en Taxco Guerrero, soy Ingeniero Electrónico por el ITESO (Guadalajara) y sacerdote de la Prelatura del Opus Dei desde el año 2009. Actualmente trabajando en la Parroquia de San Josemaría de Santa Fe, Cdmx
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={ER}></img>
                <h2 className='person_card_h2'>Pbro. Ervin Ramos</h2>
                <p className='person_card_text'>
                    ¡Hola!, soy un sacerdote tabasqueño. En el 2013 llegué a Roma para completar mi formación sacerdotal en el Seminario Sedes Sapientiae y en la Universidad de la Santa Cruz. Me encanta la música y disfruto mucho caminar en montaña. Conquistar una cima nunca es fácil pero aunque el camino sea duro cuando estás arriba el panorama es maravilloso. En la naturaleza admiro la belleza de la creación de Dios. Actualmente concluyo mis estudios en Roma, en estos años he trabajado siempre con jóvenes. Deseo de corazón que en GodCast podamos caminar juntos hacia la santidad personal a través de nuestro encuentro cotidiano con Cristo. Dios y la Reina del Cielo les bendigan.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={FGC}></img>
                <h2 className='person_card_h2'>Pbro. Francisco García Casas</h2>
                <p className='person_card_text'>
                    Nací en la Ciudad de México. Soy Licenciado en Ciencias de la Comunicación y Doctor en Teología. Recibí la Ordenación Sacerdotal en Roma en 2006. Trabajo actualmente como Capellán en la Universidad Panamericana.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={FU}></img>
                <h2 className='person_card_h2'>Pbro. Francisco Ugarte</h2>
                <p className='person_card_text'>
                    Vivo en la Ciudad de México, aunque soy de Guadalajara. Estudié la licenciatura y la maestría en la UNAM, y el doctorado también en filosofía en la Universidad de la Santa Cruz en Roma. Actualmente soy capellán del Ipade Business School y también colaboro en la formación de profesores de la Universidad Panamericana. Tuve la gran fortuna de convivir con San Josemaría, que me dejó una huella indeleble. Me gusta mucho el deporte, especialmente ahora la bicicleta de montaña.
                </p>
            </div>
        </div>
        <div className='person_card_container'>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={GG}></img>
                <h2 className='person_card_h2'>Pbro. Guillermo Gutiérrez</h2>
                <p className='person_card_text'>
                    Nací en la Cd. de México y soy sacerdote Diocesano de la Arquidiócesis de México. Actualmente soy Párroco de la Comunidad Purísima Concepción, en el Barrio La Fama y Director del Centro de Estudios de Familia Bioética y Sociedad de la Universidad Pontificia de México, donde también soy profesor.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={HR}></img>
                <h2 className='person_card_h2'>Pbro. Héctor Razo</h2>
                <p className='person_card_text'>
                    Recibí la ordenación sacerdotal el 22 de mayo de 2021. Actualmente compatibilizo mis estudios de Teología Moral en la Universidad de la Santa Cruz, en Roma, junto con otras actividades apostólicas, entre las que se encuentra la atención de una Capellanía Universitaria.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={JAC}></img>
                <h2 className='person_card_h2'>Pbro. José Antonio Cuairán</h2>
                <p className='person_card_text'>
                    Soy sacerdote desde 1995 y me ordené en Roma a los cuarenta años. Estudié derecho y ejercí la profesión 15 años antes de ordenarme: litigaba fiscal y laboral. Como sacerdote me he dedicado buen tiempo a trabajar con gente joven. Soy aficionado a la NFL y poco al soccer.
                </p>
            </div> 
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={JFC}></img>
                <h2 className='person_card_h2'>Pbro. Josemaría Fernández Cueto</h2>
                <p className='person_card_text'>
                    Soy de la Ciudad de México pero vivo en Guadalajara después de haber recibido la Ordenación Sacerdotal, hace diez años. He trabajado con jóvenes casi toda mi vida. Procuro ayudarles a buscar, encontrar y amar a Jesús con todo el corazón, como nos enseñó San Josemaría. Actualmente soy Capellán de Los Altos, una escuela para niñas donde creemos que las cosas ordinarias se pueden hacer extraordinariamente bien por amor a Dios. Disfruto de la compañía de mi familia. Me gusta jugar tenis y tomar cerveza con los amigos.
                </p>
            </div> 
        </div>
        <div className='person_card_container'> 
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={JM}></img>
                <h2 className='person_card_h2'>Pbro. Josemaría Mayora</h2>
                <p className='person_card_text'>
                    Estudié Ingeniería Industrial en la Universidad Panamericana (Campus Guadalajara) y algunos años después hice el doctorado en Sagrada Teología en la Pontificia Universidad de la Santa Cruz (Roma, Italia). Actualmente soy profesor del Instituto de Humanidades de la Universidad Panamericana Campus México, en donde imparto la asignatura de Antropología Teológica II. Defendí la tesis doctoral titulada “Análisis moral del fenómeno de las dependencias (adicciones)”. Mis áreas de especialización son: noviazgo, matrimonio y familia. Además de la labor académica me dedico a la atención de capellanía de la Universidad Panamericana y en la Preparatoria Varonil de la misma Universidad. Mi deporte es el padel, y disfruto mucho pasar el tiempo con mis amigos.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={JPL}></img>
                <h2 className='person_card_h2'>Pbro. Juan Pablo Lira</h2>
                <p className='person_card_text'>
                    Soy el más pequeño de cinco hermanos. Nací en la playa (Puerto Vallarta, 1979) y crecí en Querétaro, donde conocí el Opus Dei de niño y me hice parte de él en mi juventud. Me trasladé a la ciudad de Mexico para la Universidad. Unos años después, tras sentir la inquietud por el sacerdocio, me moví a la ciudad de Roma para estudiar y donde recibí la ordenación sacerdotal en 2011. A finales de ese año me moví a Monterrey donde viví diez felices años trabajando con gente joven. Ahora sigo haciendo lo mismo pero en la ciudad de Guadalajara.
                </p>
            </div> 
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={OE}></img>
                <h2 className='person_card_h2'>Pbro. Omar Espíritu</h2>
                <p className='person_card_text'>
                    Nací en Orizaba Veracruz. Recibí el orden sacerdotal en 2016. Aunque estudié Ingeniería Civil, me he dedicado a la educación, gusto heredado de mi papá, actualmente vivo en Hermosillo Sonora, trabajo como capellán del colegio Campogrande. Otro gusto que tengo es la música, desde pequeño toco la batería y también me gusta mucho la historia del arte, soy fan de Caravaggio y Miguel Angel, también de los padres de San Diego y sobre todo de los Steelers.
                </p>
            </div> 
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={PB}></img>
                <h2 className='person_card_h2'>Pbro. Pedro Benítez</h2>
                <p className='person_card_text'>
                    Nací en la Ciudad de México. Soy sacerdote de la arquidiócesis de Tlalnepantla. Actualmente vivo en España donde me dedico a la formación sacerdotal.
                </p>
            </div>
        </div>
        <div className='person_card_container'>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={RA}></img>
                <h2 className='person_card_h2'>Pbro. Rafael Arce</h2>
                <p className='person_card_text'>
                    Nací en la Ciudad de México, en 1957.  Soy Licenciado en Derecho y Doctor en Teología.  Fui ordenado sacerdote en Roma,  en 1982.  Soy aficionado a la natación, a la música clásica y coral, al piano y a la literatura. Soy profesor de Teología en la Universidad Panamericana. Trabajo en la Parroquia de San Josemaría Escrivá, en Santa Fe, Ciudad de México.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={RV}></img>
                <h2 className='person_card_h2'>Pbro. Roberto Vera</h2>
                <p className='person_card_text'>
                    Nací y crecí en la Ciudad de México, ciudad de la que soy un entusiasta sin remedio, aunque también estoy orgulloso de mis raíces oaxaqueñas. Estudié Lengua y Literaturas Hispánicas en la UNAM y luego pasé 14 años en Roma, trabajando en el ámbito de la comunicación institucional y estudiando en la Pontificia Universidad de la Santa Cruz, en la que obtuve el doctorado en Teología Bíblica. Fui ordenado sacerdote en 2020. Al regresar a México viví unos meses en Guadalajara y actualmente desarrollo mi tarea sacerdotal en San Luis Potosí. Me gusta mucho leer y escuchar música y me encanta lo relacionado con la edición y encuadernación de libros.
                </p>
            </div>
            <div className='person_card'>
                <img className='person_card_image' alt='personimg' src={TL}></img>
                <h2 className='person_card_h2'>Pbro. Tadeo López</h2>
                <p className='person_card_text'>
                    Soy de Monterrey NL. Estudié periodismo por providencia divina aunque siempre he tenido vena ingenieríl. Luego me dio por la Teología Bíblica y aquí estamos. Fui ordenado sacerdote en 2014 (en Roma) y desde entonces, feliz de la vida. Me encanta la literatura, la narrativa, y un montón de cosas más. Me gusta también la vida académica y universitaria. O sea... un poco ñoño sí soy, pero un poco nada más...
                </p>
            </div>
            <div className='fill_card'>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TeamCarousel