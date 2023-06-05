import React, {useEffect, useState} from 'react'

import { new_mujer_cocina, new_hombre_celular, new_hombre_sala, new_mujer_celular, new_hombre_padel, new_mujer_coche } from '../assets/images/people/assets_people'

import '../styles/carousel2.css'

function Carousel2() {
    const [isActive, setIsActive] = useState(false);
    const [position, setPosition] = useState(0);
    
    useEffect(() => {
        setTimeout(() => {
            setIsActive(true)
            if (position - 16.666 > -95) {
                setPosition(position - 16.666)
            }
            else {
                setPosition(0)
            }
        }, 3000);
    });

  return (
    <div className='carousel2' style={isActive ? {transform: `translateY(${position}%)`} : {transform: `translateY(0)`}}>
        <div className='carousel2_images_container'>
            <div className='carousel2_image'>
                <img className='carousel2_img' src={new_mujer_cocina} alt='audifonos' />
            </div>
            <div className='carousel2_image'>
                <img className='carousel2_img' src={new_hombre_celular} alt='audifonos' />
            </div>
            <div className='carousel2_image'>
                <img className='carousel2_img' src={new_mujer_celular} alt='audifonos' />      
            </div>
            <div className='carousel2_image'>
                <img className='carousel2_img' src={new_hombre_sala} alt='audifonos' />
            </div>
            <div className='carousel2_image'>
                <img className='carousel2_img' src={new_mujer_coche} alt='audifonos' />
            </div>
            <div className='carousel2_image'>
                <img className='carousel2_img' src={new_hombre_padel} alt='audifonos' />
            </div>
        </div>
    </div>
  )
}

export default Carousel2