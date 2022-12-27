import "../styles/AvalancheRatingCollection.css"
import AvalancheRating from "./AvalancheRating"

const AvalancheRatingCollection = () => {
    return (
        <div className="ratingContainer">
            <AvalancheRating index={0} text={"No Rating"}></AvalancheRating>
            <AvalancheRating index={1} text={"Low"}></AvalancheRating>
            <AvalancheRating index={2} text={"Moderate"}></AvalancheRating>
            <AvalancheRating index={3} text={"Considerable"}></AvalancheRating>
            <AvalancheRating index={4} text={"High"}></AvalancheRating>
            <AvalancheRating index={5} text={"Extreme"}></AvalancheRating>
        </div>
    );
}
 
export default AvalancheRatingCollection;