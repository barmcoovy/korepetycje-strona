import React from 'react'
import image from '../assets/placeholder.jpg'
const AboutMe = () => {
  return (
    <div id='o mnie' className='about-container w-full flex justify-center items-center'>
        <div className='rounded-xl w-[60%] bg-black text-center p-7 flex flex-col gap-10 items-center'>
            <h1 className='text-5xl'>O Mnie</h1>
            <p>Nazywam się Bartosz Miecznikowski. Jestem uczniem 4 klasy technikum programistycznego w Nysie. <br />
                Moje zainteresowanie to programowanie, matematyka i sport.
            </p>
            <img src={image} alt='image' className='w-[50%] rounded-3xl'/>
        </div>
    </div>
  )
}

export default AboutMe