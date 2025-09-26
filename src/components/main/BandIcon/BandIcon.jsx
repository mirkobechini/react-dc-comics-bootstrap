//import cards content
import cards_content from "./../../../data/main_bandIcon_cards.js"

//Import Components
import BandIconCard from "./BandIconCard/BandIconCard.jsx"


export default function BandIcon() {
    return (
        <>
            <div className="bg-primary">
                <div className="container mt-4">
                    <div className="row row-cols-5 g-4 py-4 text-white">
                        {
                            cards_content.map(card =>
                                <div className="col m-0 py-3" key={card.id}>
                                    <BandIconCard card={card} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}