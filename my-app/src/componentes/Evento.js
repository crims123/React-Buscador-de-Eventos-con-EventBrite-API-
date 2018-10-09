import React, { Component } from 'react';

class Evento extends Component {


  render() {

// recibe el evento por separado por medio de props vamos a crear es objeto destructor
console.log(this.props.info);
const {name,description,logo,url} =this.props.info;

// en algunos casos no hay imagenes para eso usamos una condicion ternaria 

//vamos a limitar la descripcion a 250 caracteres




    return (
			  <div className="uk-card uk-card-default">
				<div className="uk-card-media-top">
				
				{logo!== null ? 

						<img src={logo.url}/> : ""

				}

				

				</div>

			<div className="uk-card-body">
				<a className="link" href={url} target="blanck" ><h3 className="uk-card-title">{name.text}</h3></a>
				
			</div>

			</div>
      
    )
  }
}

export default Evento;
