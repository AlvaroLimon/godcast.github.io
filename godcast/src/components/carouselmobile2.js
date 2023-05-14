import React, {useEffect, useState} from 'react'

//import { new_mujer_cocina, new_hombre_celular, new_hombre_sala, new_mujer_celular } from '../assets/images/people/assets_people'
import { new_hombre_celular_movil, new_hombre_sala_movil, new_mujer_celular_movil, new_mujer_cocina_movil } from '../assets/images/people/assets_people'

import '../styles/carouselmobile2.css'

function CarouselMobile2() {
    const [isActive, setIsActive] = useState(false);
    const [position, setPosition] = useState(0);
    
    useEffect(() => {
        setTimeout(() => {
            setIsActive(true)
            if (position - 25 > -100) {
                setPosition(position - 25)
            }
            else {
                setPosition(0)
            }
        }, 3000);
    });

  return (
    <div className='carouselmobile2' style={isActive ? {transform: `translateX(${position}%)`} : {transform: `translateX(0)`}}>
        <div className='carouselmobile2_images_container'>
            <div className='carouselmobile2_image'>
                <img className='carouselmobile2_img' src={new_mujer_cocina_movil} alt='audifonos' />
            </div>
            <div className='carouselmobile2_image'>
                <img className='carouselmobile2_img' src={new_hombre_celular_movil} alt='audifonos' />
            </div>
            <div className='carouselmobile2_image'>
                <img className='carouselmobile2_img' src={new_mujer_celular_movil} alt='audifonos' />      
            </div>
            <div className='carouselmobile2_image'>
                <img className='carouselmobile2_img' src={new_hombre_sala_movil} alt='audifonos' />
            </div>
        </div>
    </div>
  )
}

export default CarouselMobile2