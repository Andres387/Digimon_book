
import '../Card/Card.css';
import moon from '../pictures/moon.jpg';
const Card = (props)=> {
    return (
        <div onClick={props.destape} id={props.id} name = {props.par} className="carta-box">
            <div className="carta">
                <div className="cara detras">
                    <img className='imgCon' src={props.img}/>
                </div>
                <div className="cara">
                    <img className='imgCon' src={moon}/>
                </div>    
            </div>
        </div>
    )
};

export default Card;