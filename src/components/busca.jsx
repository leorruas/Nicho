import React from "react";

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
                <a> LISTA DE TODOS OS NEGÓCIOS</a>
            </div>
        </div>
        )
    }
export default Busca;