import './styles.css';

type Props = {
    name: string;
    image: string;
}

const GameCard = ({name, image}: Props) => {
    return (
        <div className="games2025-card-container">
            <div className="games2025-card-content">
                <h3>{name}</h3>
            </div >
            <img className="game-card-image" src={image} alt={name} />
        </div >
    );
}

export default GameCard;