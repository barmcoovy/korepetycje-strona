import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
const Footer = () => {
    const goToWebsite = (link)=>{
        window.open(link,"_blank")
    }
  return (
    <footer className='w-full h-[40px] md:h-[70px] bg-black flex items-center justify-between text-2xl'>
        <p className='ml-5 text-[.5rem] sm:text-xl md:text-2xl'>Bartosz Miecznikowski 2025 &copy;</p>
        <span className='flex text-xs sm:text-xl md:text-2xl gap-5 mr-10 items-center'>
        <FontAwesomeIcon icon={faDiscord} className='cursor-pointer' onClick={()=>goToWebsite("https://discord.gg/zfmUbPQ2mq")}/>
        <FontAwesomeIcon icon={faYoutube}  className='cursor-pointer'onClick={()=>goToWebsite("https://youtube.com/@barmciak")}/>
        <a href="mailto:bartoszmiecznikowski853@gmail.com"><FontAwesomeIcon icon={faEnvelope} className='cursor-pointer'/></a>
        </span>
    </footer>
  )
}

export default Footer