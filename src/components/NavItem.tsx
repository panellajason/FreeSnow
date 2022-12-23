import "../styles/NavItem.css"

interface IProps {
    readonly isSelected: boolean;
    readonly name: String;
}

const NavItem = (props: IProps) => {
    let route = "/"

    if (props.name !== "Home") {
        route += props.name.toLowerCase() 
        
    }

    return (
        <>
            {props.isSelected ? (
                <div className={"selectedText"}>{props.name}</div>
            ) : (
                <a className={"text"} href={route}>{props.name}</a>
            )}
        </>
    );
}
 
export default NavItem;