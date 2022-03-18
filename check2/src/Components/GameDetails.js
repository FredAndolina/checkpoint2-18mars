import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './gameDetails.css'


const GameDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);


    const madate = new Date(details.released)

    useEffect(() => {
        axios
            .get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then((res) => setDetails(res.data));
    }, [id]);
    return (
        <div >
        <div className='card_detail'>
            <Link to="/"><button>RETOUR A LA GAMELIST</button></Link> 
            <p className="name_title">{details.name}</p>
            
            <img className='details_image' src={details.background_image} alt="Image de la fiche sélectionnée"/>
            <p className="name_title" > Notes : {details.rating} / 5</p>
            <li className='jeu1'>Réalisé le : {madate.toLocaleDateString() }</li>
                  
           
        </div>
        </div>
    );
}
export default GameDetails;