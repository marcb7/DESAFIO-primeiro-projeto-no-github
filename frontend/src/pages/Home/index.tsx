import JoystickImage from "../../assets/img/joystick-console-.png";
import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="row home-content">
                <div className="col-6">
                    <h1 className="text-title">Confira nos links abaixo os <br /> jogos mais aguardados do <br /> primeiro trimestre de 2025</h1>
                    <div className="text-subtitle">
                        <a href="/listingFebruary">
                            <h1>Fevereiro</h1>
                        </a>
                        <a href="/listingMarch">
                            <h1>Março</h1>
                        </a>
                    </div>
                </div>
                <div className="col-6">
                    <div>
                        <img className="main-image" src={JoystickImage} alt="joystick image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;