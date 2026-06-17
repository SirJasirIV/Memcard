function Card({ id, number, onClick }) {
    return (
        <button className="card" onClick= {() => onClick(id)}>
           {number}
        </button>
    );
};
export default Card;