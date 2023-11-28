import React from 'react';
import './AppCon.css';
import Card from '../Card/Card';
import JeisonPictures from '../ImagesCon/JeisonPictures';
import DisplayResults from '../DisplayResults/DisplayResults';



let numbers = [1,5,2,6,3,8,4,7,5,1,6,2,7,3,4,8]
numbers = numbers.sort(()=>{return Math.random()-0.5});
console.log (numbers);



function AppCon () {


    const [actualIndex, setActualIndex] = React.useState  (null);
    const [actualSelection, setActualSelection] = React.useState (null);
    const [parCount, setParCount] = React.useState(1);
    const [countDown, setCountDown] = React.useState(60);
    const [timeIsUp, setTimeIsUp] = React.useState(false);
    const [encontrada, setEncontrada] = React.useState(false);
    const refCartas = React.useRef([]);


    // let ref1 = React.useRef (null);
    // let ref2 = React.useRef (null);
    // let temporizador = (false);

    React.useEffect(() => {
            const countdownInterval = setInterval(() => {
                setCountDown((prevCountDown) => {
                    if (prevCountDown === 0) {
                        setTimeIsUp(true);
                        clearInterval(countdownInterval);
                    }
                        return prevCountDown - 1;
                    });
                }, 1000);
        
            return () => clearInterval(countdownInterval);
        }, []);

        React.useEffect(() => {
            if (countDown === 0) {
                    console.log('¡Tiempo agotado!');
                    destaparTodasLasCartas();
                }
            }, [countDown]);

    React.useEffect(()=>{
        // console.log(actualSelection, document.getElementById(actualIndex), "linea 28");
        if(!actualSelection && actualIndex) {
            setActualSelection (document.getElementById(actualIndex))
            let timeout = setTimeout(()=>{
                let carta = document.getElementById(actualIndex)
                if(carta) {
                    carta.style.pointerEvents = "auto";
                    carta.classList.remove("volteo");
                    setActualSelection (null);
                }
            },3000);
            refCartas.current.push(timeout);
            // console.log (timeout, "este es tieme uout del tiem")
            // ref1.current = timeout;
        } else {
            if (actualSelection && document.getElementById(actualIndex)) {
                    console.log(
                        actualSelection.getAttribute("name"), 
                        document.getElementById(actualIndex).getAttribute("name"), 
                        "ver numeros de igualdas ln53"
                        );
                if(actualSelection.getAttribute("name") === 
                    document.getElementById(actualIndex).getAttribute("name")
                ) {
                    // console.log ("son the same", ref2, ref1)
                    setParCount(prevParCount => prevParCount + 1);
                    //, "pareja"
                    // console.log (parCount, "son parenas")
                    clearTimeout(refCartas.current[refCartas.current.length - 1]);
                    // clearTimeout (ref1.current)
                    // clearTimeout (ref2.current)
                    setEncontrada(true);

                    setTimeout(() => {
                        setEncontrada(false);
                        setActualSelection(null);
                        setActualIndex(null);
                    }, 1000);

                } else {
                    let timeout1 = setTimeout(()=>{
                            let carta = document.getElementById(actualIndex)
                            if (carta) {
                            carta.style.pointerEvents = "auto";
                            carta.classList.remove ("volteo");
                            setActualSelection (null);
                        }
                    },3000);
                }
            }
        }
    },[actualIndex]);

    function destape (event) {
        // if(temporizador == false){
        //     contarTiempo();
        //     temporizador = true;
        // }

        setActualIndex (event.currentTarget.id);
        // console.log(event.currentTarget);
        let carta = document.getElementById(event.currentTarget.id)
            if(carta !== null) {
                carta.classList.add("volteo")
                carta.style.pointerEvents = "none";
            }
        //parejasDescubiertas++;
        // console.log(parejasDescubiertas);
    }
    function destaparTodasLasCartas() {
        refCartas.current.forEach((timeout) => clearTimeout(timeout));
        refCartas.current = [];
        const cartas = document.querySelectorAll('.volteo');
        cartas.forEach((carta) => {
        carta.classList.add('volteo');
        carta.style.pointerEvents = 'auto';
        });
    }
    return (
    <div className="bodyCon">
        <div className='mainCon'>
            <div className="section1">
                    <div className="row">
                        {
                            numbers.map((element, index)=>{
                                return (
                                    <Card 
                                        img = {JeisonPictures[element -1].img} 
                                        par = {element}
                                        destape = {destape}
                                        id = {index + 1}
                                        key = {index}
                                    />
                                )
                            })
                        }
                        
                    </div>
            </div>
                    
            <div>
                {/* {displayResults.map(result => */}
                        <DisplayResults
                            match =  {parCount - 1}
                            countDown =  {countDown +1}
                            // moves = {result.moves}
                            // parejasEncontradas = {result.parejasEncontradas}
                        />
                    
            </div>
            
        </div>
        <footer>
            <p> Juego programado por <a href="www.molinasgroupdevelper.com">Andres Molina</a></p>
        </footer>
    </div>
  );
}

export default AppCon;



