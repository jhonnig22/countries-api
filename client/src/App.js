import './App.css';
import { Route, Router } from 'react-router-dom';
import Navbar from './componentes/navBar/navBar.js'
import SearchBar from './componentes/search/SearchBar';
import React from 'react';
import Start from './componentes/start/Start.js'
import FormActivity from './componentes/formActivity/Form';
import Detalle from './componentes/detalle/Detalle.js';
function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Start}/>
      <Route path="/home" component={SearchBar} />
      <Route path="/activity" component={FormActivity} />
      <Route path="/detalle/:id" component={Detalle}/>
    </div>
  );
}

export default App;
