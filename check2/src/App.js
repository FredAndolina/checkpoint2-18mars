import './App.css';
import GameList from './Components/GameList';
import Header from './Components/Header';
import { Routes, Route, Link } from 'react-router-dom';
import GameDetails from './Components/GameDetails';




function App(props) {
  
  return (
    <div className="App">
      <Header name={'2022'}/>
     
      
        
        <Routes>
          <Route path="/"   element={<GameList />} />
          <Route path="/games/:id"  element={<GameDetails />} />
        </Routes>
     

    </div>
  );
}

export default App;

