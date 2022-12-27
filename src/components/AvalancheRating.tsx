import "../styles/AvalancheRating.css"

interface IProps {
    readonly index: Number;
    readonly text: String;
}

const AvalancheRating = (props: IProps) => {
    var boxColor = "box0"

    switch (props.index) {
        case 1:
            boxColor = "box1"
            break;
        case 2:
            boxColor = "box2"
            break;
        case 3:
            boxColor = "box3"
            break;
        case 4:
            boxColor = "box4"
            break;
        case 5:
            boxColor = "box5"
            break;
        default:
            break;
    }

    return (
        <div className="ratingContainer">
            <div className={boxColor}></div>
            <div className="ratingText">{props.text}</div>
        </div>
    );
}
 
export default AvalancheRating;