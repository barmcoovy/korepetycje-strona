import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const Offer = () => {
  const [answer, setAnswer] = useState(null);
  const questions = [
    {
      id: 1,
      question: "Jak wyglądają zajęcia i ile kosztują?",
      answer:
        "Zajęcia prowadzone są stacjonarnie lub online, trwają one 60 minut. Cena za godzinę to 50 PLN",
    },
    {
      id: 2,
      question: "Czy pierwsze zajęcią są płatne?",
      answer:
        "Nie, pierwsze zajęcią są darmowe, jeśli uznasz, że nie chcesz kontynuować współpracy to możesz ją zakończyć.",
    },
    {
      id: 3,
      question: "Na jakiej platformie odbywają się zajęcia online?",
      answer:
        "Korepetycji udzielam na discordzie, uważam, że to najwygodniejsza platforma do prowadzenia zajęć online.",
    },
    {
      id: 4,
      question: "Czy udzielam korepetycji w weekendy?",
      answer:
        "Nie, weekendy traktuje jako dni wolne od pracy i nie udzielam w te dni korepetycji.",
    },
    {
      id: 5,
      question:
        "Czy posiadam jakiś kanał w social mediach, na który wrzucam przykładowe zagadnienia?",
      answer:
        "Obecnie nie posiadam żadnego konta w social mediach.",
    },
  ];
  const toogleVisibility = (id) =>{
    if(answer !== id){
        setAnswer(id);
    }else{
        setAnswer(null)
    }

  }
  return (
    <div
      id="oferta"
      className="w-full bg-black flex flex-col items-center p-7 text-center gap-5"
    >
      <h1 className="text-5xl">Oferta</h1>
      <p>
        Oferuję udzielenie korepetycji z matematyki dla uczniów klas
        podstawowych oraz uczniów klas szkół średnich (1 i 2 klasa). <br />
        Jestem w stanie przygotować również uczniów z informatyki oraz do
        egzaminów INF 0.3 oraz INF 0.4
      </p>
      <div id="faq" className="mt-7 flex flex-col items-center gap-10">
        <h1 className="text-3xl">FAQ</h1>
        {questions.map((item) => {
          return (
            <div key={item.id}>
              <span className="text-xl">
                {item.question}{" "}
                <FontAwesomeIcon
                  onClick={() => toogleVisibility(item.id)}
                  className="cursor-pointer"
                  icon={answer === item.id ? faChevronUp : faChevronDown}
                />
              </span>
              {answer === item.id && (
                <div className="h-10 flex justify-center items-center mt-5">
                  <p className="text-l font-bold">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
