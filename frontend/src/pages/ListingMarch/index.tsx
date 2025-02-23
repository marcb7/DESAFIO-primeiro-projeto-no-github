import GameCard from '../../components/GameCard';
//import './styles.css';

const ListingMarch = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <GameCard name="AI Limit" image="https://sm.ign.com/ign_br/cover/a/ai-limit/ai-limit_9z26.jpg" />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <GameCard name="The First Berserker: Khazan" image="https://sm.ign.com/ign_nordic/cover/t/the-first-/the-first-berserker-khazan_gvzm.jpg" />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <GameCard name="Atomfall" image="https://gamefaqs.gamespot.com/a/box/0/2/8/1049028_front.jpg" />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <GameCard name="Beyond the Ice Palace 2" image="https://image.api.playstation.com/vulcan/ap/rnd/202404/0514/c992b8d646e1365c6743d9e1705fe2a1b8ac98ce1d9dfb7d.png" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListingMarch;