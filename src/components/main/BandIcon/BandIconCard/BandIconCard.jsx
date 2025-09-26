export default function BandIconCard(props) {

    return (
        <div className="d-flex align-items-center justify-content-center gap-3">
            <img src={props.card.img} alt={props.card.text}  width="48" height="48" />
            <span className="text-uppercase fw-semibold bandicon-title">{props.card.text}</span>
        </div>
    )
}