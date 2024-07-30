export default function ProjectSideBar({onStartAddProject,project,onSelectProject,selectedProjectId}){
    return(
        <aside>
            <h5> Your Projects Here </h5>
            <button  onClick={onStartAddProject}className="btn btn-dark"> + Add Project </button>
            <ul className="navbar-nav">
            {
                project.map((item) => {
                 if(item.id === selectedProjectId){

                    
                 }
                 return(
                    <li className={item.id === selectedProjectId ? "nav-item active":"nav-item  "}>
                         <a  onClick={() =>onSelectProject(item.id)} className="nav-link" href="javascript:void(0)" key={item.id}> {item.title} </a> 
                    </li>
                    )
})
            }
            </ul>
        </aside>
    )
}
