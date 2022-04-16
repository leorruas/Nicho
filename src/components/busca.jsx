import React from "react";
import { Link } from "react-router-dom";
import './busca.css'

const Busca = () => {
    return (
        <div className="Inicial">
            <h1 className="opening">
            Encontre oportunidades próximas de você e cresça a  sua rede de atuação!
            </h1>
            <fieldset>
            <form className="pesquisaHome">
                <input className="form-home" id="buscaIput" placeholder="procure por negócios em nossa rede" type="text" />
                    <button className="home-send" id="buscaEmpresas"></button>
            </form>
            </fieldset>
            <div className="advanced">
                <Link to='/todos'> LISTA DE TODOS OS NEGÓCIOS
                </Link>
            </div>
        </div>
        )
    }
export default Busca;