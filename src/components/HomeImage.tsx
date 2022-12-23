import "../styles/HomeImage.css"
import homeImage from '/HomeImage.jpeg'

const HomeImage = () => {

  return (
      <a href="/">
        <img src={homeImage} className="image"/>
      </a>
  );
}
 
export default HomeImage;