import React, { Component } from "react";
import "./estilo.css";
import DeleteSVG from "../../assets/img/delete.svg";

class CardNota extends Component {

  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota" >
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
        <img src={DeleteSVG} className="canto" alt="Apagar imagem" onClick={ this.apagar.bind(this) }/>
        <h4 className="cabecalho">{this.props.categoria}</h4>
      </section>
    );
  }
}

export default CardNota;
