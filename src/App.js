// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header'; // Importa tu componente de cabecera
import MainContent from './components/MainContent'; // Importa tu componente de contenido principal 
import {Principalsection} from './components/Principal-section';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      
      <Provider store={store}>
      <div>
        <Principalsection/>
        <Header />
        <MainContent />
      </div>
    </Provider>
    </div>
  );
}

export default App;