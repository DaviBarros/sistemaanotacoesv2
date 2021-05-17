import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component{

    constructor(){
        super();
        this.state = { categorias: [] };
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        console.log(categorias);
        this.setState({...this.state, categorias});
    }    

    _handleEventoInput(evento){
        if(evento.key === "Enter"){
            let valorCategoria = evento.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render(){
        return(
            <section>

                <ul className="estilo">
                    {this.state.categorias.map((categoria, index)=>{
                        return (
                            <li key={index}>{ categoria }</li>
                        )
                    })}                   
                </ul>

                
                <input type="text" className="inputCategoria" placeholder="Adicionar categoria"
                onKeyUp={this._handleEventoInput.bind(this)}
                />
                

            </section>
        )
    }
}

export default ListaDeCategorias;