import'../DisplayResults/DisplayResults.css';

// let mostrarMovimientos = document.getElementById('movimientos');
// let mostrarAciertos = document.getElementById('aciertos');
// let mostrarTiempo = document.getElementById('t-restante');

const DisplayResults = (props)=> {
    return (
        <section className="section2">
            <h2 className="estadisticas"> Aciertos : {props.match} </h2>
            <h2 className="estadisticas"> Tiempo : {props.countDown} segundos</h2>
            <h2 className="estadisticas"> Movimientos :{props.moves} 0</h2>
    
        </section>
    )
};

export default DisplayResults;