import "../styles/NavBar.css"
import HomeImage from "./HomeImage";
import NavItem from "./NavItem";

interface IProps {
  readonly selectedNavItem: String;
}

const NavBar = (props: IProps) => {

  return (
    <>
      <div className="navItemContainer">
        <HomeImage></HomeImage>
        <div className="navItems">
          <NavItem name={"Home"} isSelected={props.selectedNavItem === "Home"}></NavItem>
          <NavItem name={"Projects"} isSelected={props.selectedNavItem === "Projects"}></NavItem>
          <NavItem name={"About"} isSelected={props.selectedNavItem === "About"}></NavItem>
        </div>
      </div>
      <div className="separatorContainer">
        <div className="separator"></div>
      </div>
    </>
  );
}
 
export default NavBar;