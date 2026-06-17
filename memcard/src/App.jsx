import CardGrid from "./components/cardgrid.jsx"
import './App.css'
import { useState } from "react"

function App() {
    const [clickedCards, setClickedCards] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const initialCards = [
      {id: 1, number: 1},
      {id: 2, number: 2},
      {id: 3, number: 3},
      {id: 4, number: 4},
      {id: 5, number: 5},
      {id: 6, number: 6},
      {id: 7, number: 7},
      {id: 8, number: 8}
    ];
    const [cards, setCards] = useState(initialCards);

    function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5)
    }

      function handleClick(id) {
        console.log(`Card number ${id} was clicked`);
        if (gameOver) return; 
        if (clickedCards.includes(id)) {
          console.log("Game Over!")
          setGameOver(true)
          return;
        } else {
          setClickedCards(prev =>[...prev, id]);
          setCards(prevCards =>shuffle(prevCards))
        }
    }
    function resetGame(){
      setClickedCards([]);
      setGameOver(false);
    }
  return (
       <>
       <h1>Hey</h1>
       <CardGrid handleClick={handleClick} resetGame={resetGame} cards={cards}/>
       </>
  )
}

export default App
