import JoystickImage from "../../assets/img/joystick-console-.png";
import '../Home/styles.css';

const About = () => {
    return (
        <div className="home-container">
            <div className="row home-content">
                <div className="col-6">
                    <h1 className="text-title">O intuito deste site é apresentar <br /> alguns dos jogos mais aguardados <br /> de 2025, listando os lançamentos previstos do primeiro trimestre.</h1>
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

export default About;