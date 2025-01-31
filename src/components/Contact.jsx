import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='contact-container mt-[-70px] w-[100%] flex items-center justify-center'>
        <div id='kontakt' className="contact-block bg-black h-[600px] w-[80%] md:w-[70%] lg:w-[50%] md:50 rounded-2xl flex flex-col items-center gap-10 justify-center">
            <h1 className='mt-6 text-xl md:text-5xl '>KONTAKT</h1>
            <p className='text-xs'>Jeśli masz jakieś pytanie, pytaj śmiało</p>
            <span className='flex items-center gap-4 ttext-xs sm:text-xl md:text-4xl'>
                <FontAwesomeIcon icon={faPhone}/>
                <a href='tel:+48880239637'>880 239 637</a>
            </span>
            <span className='flex items-center gap-4 text-xs sm:text-xl md:text-2xl'>
                <FontAwesomeIcon icon={faAt} className=' md:text-4xl'/>
                <a href="mailto:bartoszmiecznikowski853@gmail.com">bartoszmiecznikowski853@gmail.com</a>
            </span>
            <span className='flex items-center gap-4 text-xs sm:text-xl md:text-4xl'>
                <FontAwesomeIcon icon={faDiscord}/>
                <p>barmc#5329</p>
            </span>
        </div>
    </div>
  )
}

export default Contact