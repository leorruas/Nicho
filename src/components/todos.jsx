import React from "react";


// Components
import Header from './header';
import '../App.css'
import'./todos.css'
import Hamburguer from "./hamburger";



const Todos = () => {
   
    var allClients = JSON.parse(localStorage.getItem('db_client'));
    console.log(allClients)
    const renderAllClients = (allClients, index) => {
        return(
            <>
            <section>
            <div className="dois">
                <div className="empresa"><h1>{allClients.empresa}</h1>
                <p className="distancia">está há 2km de você</p></div>
        
            <div className="sobre">{allClients.sobre}</div>
            </div>
            <div className="flex">
            <div className="endereco">{allClients.endereco}</div>
            <div className="contato">email: {allClients.email}</div>
            <div className="contato">telefone: {allClients.telefone}</div>
            </div>
           </section>

            </>
        )
    }
    
    
    return (
        <>
       
            <Header/>
            <main>
                <h1 className="titulo">
                Conheça todos os empreendimentos que fazem parte de nossa rede!
                </h1>
                <div className="todos">
                    
                  {allClients.map(renderAllClients)}
                    
                </div>
            </main>
            <Hamburguer />
            </>
    )
}
export default Todos;