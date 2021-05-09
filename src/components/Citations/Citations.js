import React from 'react';
import './Citations.css'

function Citations(){
    return(
        <div className="app flex-parent">
            <main className="modal">
                <div>
                    <h1 className="citation-header">Images</h1>
                    <a href="https://www.vecteezy.com/free-vector/processor">Processor Vectors by Vecteezy</a>
                    <a href="https://www.pexels.com/photo/pink-and-dark-color-abstract-painting-2911527/">Pink and Dark Color Abstract Painting by Dids</a>
                </div>
                <div>
                    <h1 className="citation-header">Software</h1>
                    <span>
                        This website was made using
                        <a href="https://github.com/facebook/react/blob/master/LICENSE"> React </a>, 
                        <a href="https://github.com/facebook/create-react-app/blob/master/LICENSE"> create-react-app </a>, 
                        and 
                        <a href="https://github.com/ReactTraining/react-router/blob/master/LICENSE"> react-router </a>,
                    </span>
                    <br/>
                    <div>
                        A substantial amount of the structure and setup for this project was created by create-react-app.
                        The components directory, questions directory, App.js and App.css files represent my work; the rest 
                        was generated automatically by create-react-app. Because the create-react-app contribution was significant,
                        I have left its notes in the README.md file.
                    </div>
                </div>
                <div>
                    <h1 className="citation-header">Other</h1>
                    For CSS boilerplate (marked as such in index.css), I borrowed some CSS from previous projects at OSU.
                </div>
            </main>
        </div>
    )
}

export default Citations;