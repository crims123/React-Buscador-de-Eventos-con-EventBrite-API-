import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Eventos from './componentes/Eventos';

class App extends Component {

//estado inicial

state ={
  categorias:[],
  nombre: {},
  eventos:[],
}

obtenerEventos=async(busqueda)=>{
  //console.log(busqueda);

  let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&sort_by=date&categories=${busqueda.categoria}&token=WKMJO6CCBVQVPPJPRDT3&locale=es_ES`;
  //console.log(url);

  await fetch(url)  // utilizamos el await para ejecutar de manera asincronica asi cargue la pagina
  // el fectch sigue trabajando

  .then(respuesta=>{
      return respuesta.json();

  })

  .then(eventos=>{
      //console.log(eventos.events);
     this.setState({

        eventos:eventos.events,
    })
    
  })

}

token ="WKMJO6CCBVQVPPJPRDT3";

//vamos a cargar la api

componentDidMount(){
  this.obtenerCategorias();
}


obtenerCategorias= async()=>{  // lo descarga de manera asincronica



  let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

  // hacemos el llamado de la api con el metodo fetch

  await fetch(url)  // utilizamos el await para ejecuttar de manera asincronica asi cargue la pagina
  // el fectch sigue trabajando

  .then(respuesta=>{
      return respuesta.json();

  })

  .then(categorias=>{
    // opbetenos las categorias de la api
    // accedemos a categories.categories que es donde estan todas las categorias organizadas en un arreglo
    //console.log(categorias);
      this.setState({

        categorias:categorias.categories,
      })
  })
}




  render() {
    return (
      <div className="uk-margin" uk-margin="true" >
        <Header titulo="Buscardor de Eventos"/>
        <Formulario categorias={this.state.categorias} obtenerEventos={this.obtenerEventos} />
        <Eventos eventos={this.state.eventos} />
      </div>
    );
  }
}

export default App;
