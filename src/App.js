import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import QuizPage from './components/QuizPage/QuizPage';
import QuestionBank from './components/QuestionBank/QuestionBank';
import Home from './components/Home/Home';
import Citations from './components/Citations/Citations';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/citations' component={Citations}/>
        <Route exact path='/quiz' component={QuizPage}/>
        <Route exact path='/bank' component={QuestionBank}/>
        <Route exact path='/' component={Home}/>
        <Route component={() => <div>404 Not Found</div>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
