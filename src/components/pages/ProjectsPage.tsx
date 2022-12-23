import ProjectTile from "../ProjectTile";
import socalSkiToursLogo from '/socalSkiToursLogo.jpeg'
import youDriveLogo from '/youDriveLogo.jpeg'

const ProjectsPage = () => {
    const socalSkiToursUrl = "https://apps.apple.com/app/socal-ski-tours/id1610471483?l=en&platform=iphone"
    const socalSkiToursDescription = "Known for its beaches and sunny weather, Southern California doesn't usually come to mind as a backcountry skiing destination. When winter does decide to show its face, the alpine terrain comes to life and so do the dedicated backcountry riders. This app covers some of the major ski descents in Southern California and can serve alongside one of the many tools needed for planning a backcountry ski tour."
    const socalSkiToursTitle = "Socal Ski Tours"

    const youDriveUrl = "https://apps.apple.com/app/you-drive/id6444573012"
    const youDriveDescription = "How much more do you drive than your friends? Join groups, log drives, and see who drives the most in your friend group."
    const youDriveTitle = "You-Drive"

    return (
        <>
            <ProjectTile description={socalSkiToursDescription}  href={socalSkiToursUrl} logo={socalSkiToursLogo} title={socalSkiToursTitle}></ProjectTile>
            <ProjectTile description={youDriveDescription} href={youDriveUrl} logo={youDriveLogo} title={youDriveTitle}></ProjectTile>
        </>
    );
}
 
export default ProjectsPage;