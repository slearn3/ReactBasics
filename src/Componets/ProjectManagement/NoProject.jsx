
import NoProjectimg from "../../Assets/images/NoProject.jpg";

export default function NoProject(props) {
    return (
        <div className="text-center">
            <div className="my-3">  <img src={NoProjectimg} width={200} /> </div>
            <div>  <p className="text-secondary">No Projects Here</p> </div>
            <div> <button onClick={props.onStartAddProject} className="btn btn-primary"> Create Project </button> </div>
        </div>

    )
}