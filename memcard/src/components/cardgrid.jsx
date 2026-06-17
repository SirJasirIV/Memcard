import Card from "./card.jsx"
function CardGrid({ handleClick, resetGame, cards}) {
    return (
        <>
        <div className="cardGrid">
            {cards.map((card) => (
                <Card 
                key={card.id}
                id={card.id}
                number={card.number}
                onClick={handleClick}
                />
            ))}
        </div>
        <button onClick={resetGame}>Reset Game</button>
        </>
    )
};
export default CardGrid;