import GameCard from '../../components/GameCard';
//import './styles.css';

const ListingFebruary = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <GameCard name="Monster Hunter Wilds" image="https://image.api.playstation.com/vulcan/ap/rnd/202409/0506/aa5c40ba185302dfcc88edc276a876fdc6c516c4db07ec9d.png" />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <GameCard name="Ninja Five-0" image="https://assets-prd.ignimgs.com/2022/11/03/ninjafive0-1667435059396.jpg" />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <GameCard name="Tomb Raider IV-V-VI Remastered" image="https://image.api.playstation.com/vulcan/ap/rnd/202409/1221/c785b0366d8f84a18dd17a0d046fdee92ccd6195d79c81a1.png" />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <GameCard name="Avowed" image="https://assets-prd.ignimgs.com/2024/01/18/avowed-1705614230516.jpg" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListingFebruary;