import React from "react";


// Components
import Header from './header';
import '../App.css'



const Todos = () => {
    const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
    const dbClient = getLocalStorage('db_client');
    const updateTable = () => {
        const dbClient = getLocalStorage();
    }
    
    window.addEventListener("load", updateTable);

    return (
        <>
            <Header/>
            <main>
                <h1>
                Conheça todos os empreendimentos que fazem parte de nossa rede!
                </h1>
                <div className="todos">
                    <section className="each-enter">
                
                    </section>
                </div>
            </main>

            </>
    )
}
export default Todos;