import React, { Component } from 'react';
import Evento from './Evento';


class Eventos extends Component {


  render() {

    return (
    		<div className="uk-child-width-1-4@m" uk-grid="true">


    					{Object.keys(this.props.eventos).map(separar=>(

    							<Evento
    							key={separar}
    							info = {this.props.eventos[separar]}
    							/>
    					))}

    			


    		</div>
	    );
  }
}

export default Eventos;
