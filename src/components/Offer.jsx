import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const Offer = () => {
    const questions = [
        { id: 1, question: "Jak wyglądają zajęcia i ile kosztują?", answer: "" },
        { id: 2, question: "Czy pierwsze zajęcią są płatne?", answer: "" },
        { id: 3, question: "Na jakiej platformie odbywają się zajęcia online?", answer: "" },
        { id: 4, question: "Czy udzielam korepetycji w weekendy?", answer: "" },
        { id: 5, question: "Czy posiadam jakiś kanał w social mediach, na który wrzucam przykładowe zagadnienia?", answer: "" }
      ];
  return (
    <div id='offer' className='w-full bg-black flex flex-col items-center p-7 text-center gap-5'>
        <h1 className='text-5xl'>Oferta</h1>
        <p>Oferuję udzielenie korepetycji z matematyki dla uczniów klas podstawowych oraz uczniów klas szkół średnich (1 i 2 klasa). <br />
            Jestem w stanie przygotować również uczniów z informatyki oraz do egzaminów INF 0.3 oraz INF 0.4
        </p>
        <div id='faq' className='flex flex-col items-center gap-5'>
            <h1 className='text-3xl'>FAQ</h1>
            {
                questions.map((item)=>{
                    return(
                        <span key={item.id}>{item.question} <FontAwesomeIcon onClick={()=>console.log(item.id)} className='cursor-pointer' icon={faChevronDown}/></span>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Offer