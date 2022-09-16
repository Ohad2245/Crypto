import {useState } from "react";
import "../App.css";
import React from "react";
import Header from "../components/Header/Header";
import FAQ from '../components/FAQ/FAQ';
import img from '../assets/scroll/1.jpg'

function QA() {
  const [faqs, setfaqs] = useState([
    {
      question: "How does React Work?",
      answer: "React creates a virtual DOM. When state changes in a component it firstly runs a 'diffing' algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.",
      open: false,
      image: <img src={img} alt="img" width="100" height="100"/>
    },
    {
      question: "What is SPA?",
      answer: "Single pages",
      open: false,
    },

    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "What your name?",
      answer: "Ohad",
      open: false,
    },
    {
      question: "What is SPA?",
      answer: "Single pages",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
    {
      question: "What your name?",
      answer: "Ohad",
      open: false,
    },
    {
      question: "What is SPA?",
      answer: "Single pages",
      open: false,
    },
    {
      question: "Who is the mose awesome person?",
      answer: "You,The Viewer",
      open: false,
    },
  ]);

  const toggleFAQ = index =>{
    setfaqs(faqs.map((faq ,i)=>{
      if(i === index){
        faq.open = !faq.open
      }else{
        faq.open = false;
      }
      return faq;
    }))
  }

  return (
    <div>
      <Header />
      <div className="faqs">   
        {faqs.map((faq,i)=>(
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
        ))}
      </div>
    </div>
  );
}

export default QA;
