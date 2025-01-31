import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
const ArrowUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        const toogleVisibility = ()=>{

            if(window.scrollY > 150){
                setIsVisible(true)
                
            }
            else{
                setIsVisible(false)
            }
        }
        window.addEventListener('scroll', toogleVisibility)
    },[]);

    const scrollUp = ()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    
  return (
        isVisible&&(
            <div onClick={scrollUp} className='hidden md:block fixed bottom-3 right-10 bg-black p-5 rounded-4xl cursor-pointer'>
            <FontAwesomeIcon className='text-2xl' icon={faArrowUp}/>
            </div>
        )
        
  )
}

export default ArrowUp