import "../styles/ProjectTile.css"
import openLogo from '/openLogo.jpeg'

interface IProps {
    readonly description: String;
    readonly href: string;
    readonly logo: string;
    readonly title: String;
}

const ProjectTile = (props: IProps) => {
    return (
        <a className="mainContainer" href={props.href} target="_blank">
            <div className="imageAndTextContainer">
                <img src={props.logo} className="logoImage"/>
                <div className="textContainer">
                    <div className="textTitle">{props.title}</div>
                    <div className="textDescription">{props.description}</div>
                </div>
            </div>
            <img src={openLogo} className="openImage"></img>
        </a>
    );
}
 
export default ProjectTile;