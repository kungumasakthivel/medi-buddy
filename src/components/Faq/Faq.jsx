import { useState, useEffect } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [qAndA, setQandA] = useState(null);

  useEffect(()=> {
    const fetchData = async () => {
        try {
            const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result);
            const QAndArray = await result[0].page_config[6].props;
            console.log(QAndArray); 
            setQandA(QAndArray);
            
        } catch (error) {
            console.error(error.message);
        }
    }
    fetchData();
  }, [])

  // const faqs = [
  //   { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
  //   { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML." },
  //   { question: "How does state work in React?", answer: "State in React allows you to store and manage data that can change over time." }
  // ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const plusBtn = () => {
    return (
        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z" stroke="#98A2B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
  }

  const minusBth = () => {
    return (
        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z" stroke="#98A2B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
  }

  return (
  <div className="faq-container">
      {qAndA && qAndA.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question flex flex-row justify-between">
            <div className='grid justify-items-stretch questions-container'>
                <span className='questions'>{faq.question}</span>
            </div>
            <div className='basis-1/6'>
                <button onClick={() => toggleAnswer(index)} className="faq-button">
                    {activeIndex === index ? minusBth() : plusBtn()}
                </button>
            </div>
          </div>
          {activeIndex === index && (
            <div className="faq-answe grid justify-items-stretch answer-container">
              <p className='answer'>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
