import "../styles/NavBar.css"
import HomeImage from "./HomeImage";
import NavItem from "./NavItem";
import navBar from '/navBar.jpeg'

interface IProps {
  readonly selectedNavItem: String;
}

const NavBar = (props: IProps) => {

  return (
    <>
      <img className="backgroundImage" src={navBar}></img>
      <div className="navItemContainer">
        <HomeImage></HomeImage>
        <div className="navItems">
          <NavItem name={"Home"} isSelected={props.selectedNavItem === "Home"}></NavItem>
          <div className="spacer"/>
          <NavItem name={"Forecast"} isSelected={props.selectedNavItem === "Forecast"}></NavItem>
          <div className="spacer"/>
          <NavItem name={"About"} isSelected={props.selectedNavItem === "About"}></NavItem>
        </div>
      </div>
    </>
  );
}
 
export default NavBar;