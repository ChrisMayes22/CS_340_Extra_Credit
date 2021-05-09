
import '../../App.css'
import './Home.css'
import React from 'react'
import { Link } from 'react-router-dom';

function QuizPage() {
  return (
    <main className="app flex-root">
        <section className="header--flex">
          <h1 className="page-title">ACID</h1>
        </section>
        <section className="footer--flex">
          {[["Quiz", "/quiz"], ["Question Bank", "/bank"], ["Citations", "/citations"]].map((section, i) => {
            /* for resource in URIs, render a link to that resource */ 
            return ( 
              <Link to={section[1]} key={`${i}-home-link`}>
                <button className="nav-button">
                  {section[0]}
                </button>
              </Link>
            )
          })}
        </section>
        <h1 className="attribution">By Chris Mayes</h1>
    </main>
  );
}

export default QuizPage;
