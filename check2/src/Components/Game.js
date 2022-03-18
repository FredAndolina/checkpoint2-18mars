import React from 'react';
import './game.css'
import {Link} from 'react-router-dom'



/*On créé notre props pour récupérer notre jeu de GameList*/
const Game = (props) => {
   
    const { game } = props
    console.log(game)
    const { supp } = props
    

 
    return (
        <div className='card'>
           <p className='jeu'>{game.name} </p>
            <img className='image_principale' src={game.background_image} alt='{jeu.genres.name}' />
         
            <ul>
                <div className="info_container">
                    
                    
                    
                    <li className='jeu1'>Note : {game.rating} /5 </li>
                    <li></li>
                    <button className='supp' onClick={()=>supp(game.id)}>Suppression FICHE : " {game.name} "</button><br></br>

                    <Link to={`/games/${game.id}` } ><button>Aller à la Fiche : " {game.name} "</button></Link> 
                   
                </div>
            </ul>
        </div>
    );
};
export default Game;