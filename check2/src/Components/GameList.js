import { useState, useEffect } from "react";
import './GameList.css'
import axios from 'axios';
import Game from "./Game";





const GameList = (props) => {
  const [gameList,setgameList]=useState([])
  const [note, setnote]=useState(false)
  
  useEffect(() => {
   
    axios
      .get("https://apis.wilders.dev/wild-games/games/")
      .then((response) => setgameList(response.data));
  }, []);

  const trier=()=> {
    setnote(!note)
  }


  const supp=(id)=>{
    const sortedCard = gameList.filter(game => {
         return game.id !== id
       })
       setgameList (sortedCard)
 }
  
  return( 
<div className="gameList">
    <button onClick={trier}>{!note ?"Trier les notes supérieures ou égales à 4,5 /5" : "Tous les jeux"}</button>
            
               {/*   trier les notes supérieur >=4,5 */}
                {gameList.filter((filtrer)=>!note || filtrer.rating>=4.5).map((game) => (
                    <Game game={game} key={game.id} supp={supp}/>
                ))
                }
        </div>
  )}
export default GameList;

