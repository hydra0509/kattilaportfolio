import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigationbar from './Navigationbar';
import Cardsites from './Cardsites';



function App() {

  return (
    <div>
     <Navigationbar />
     <Cardsites />
     </div>
      );
}

export default App;
